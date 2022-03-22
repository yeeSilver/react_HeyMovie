import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";
import styled from "styled-components";

export default function Banner() {
  //다수의 무비데이터를 넣어주기 위해 초기값은 빈 배열로 선언
  const [movie, setMovie] = useState([]);
  //play 버튼 클릭 초기화(false로)
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    //특정 영화의 상세 정보 가져오기 (비디오 포함)
    //영화 상세 정보들을 movieDetail로 받아오고 이를 setMovie로 스테이트 안에 저장.
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail)
  };

  const truncate = (str, n) => {
    // str이 있다면 그리고 length가 n보다 크다면 str 뒤를 자르고 ...을 붙이고 아니면 그냥 str
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  };
  console.log(movie.videos);
  // console.log(movie.videos.results[0].key);
  //플레이버튼을 클릭하지 않았을 때 보여주는 화면
  if (!isClicked){
    return (<header
    className="banner"
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "top center",
      backgroundSize: "cover",
    }}>
      <div className="banner__contents">
        <h2 className="banner__title">
          {/* title이 없으면 name, name이 없으면 original name으로 */}
          {movie.title || movie.name || movie.original_name}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button play" onClick={() => setIsClicked(true)}>▶️</button>
          <button className="banner__button info">More Information</button>
        </div>
        <h3 className="banner__description">{truncate(movie.overview, 100)}</h3>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>);
  }else{
    return (
      <Container>
        <HomeContainer>
          {/* key 에러로 인해 &&구문으로 수정 */}
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0] && movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0] && movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }

}

//컴포넌트 이름 대문자로 시작 주의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`
const Iframe = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`