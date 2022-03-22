import axios from "../api/axios";
import React, { useState, useEffect } from "react";
import requests from "../api/request";
import "./Banner.css";

export default function Banner() {
  //다수의 무비데이터를 넣어주기 위해 초기값은 빈 배열로 선언
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request)
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
    return str?.length > n ? str.substr(0, n-1) + "..." : str

  }

  return <header
  className="banner"
  style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "top center",
    backgroundSize: "cover"
  }}>
    <div className="banner_contents">
      <h2 className="banner_title">
        {/* title이 없으면 name, name이 없으면 original name으로 */}
        {movie.title || movie.name || movie.original_name}
      </h2>
      <div className="banner_buttons">
        <button className="banner_button play">▶️</button>
        <button className="banner_button info">More Information</button>
      </div>
      <h3 className="banner_description">{truncate(movie.overview, 100)}</h3>
    </div>

    <div className="banner_fadeBottom"></div>
  </header>;
}
