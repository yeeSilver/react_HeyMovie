import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import { MovieModal } from "./MovieModal/index";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  // 클릭시 모달에 무비 정보 보내기 위해 생성한 스테이트
  const [movieSelected, setMovieSelected] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    //영화 정보들 movies에 넣어주기
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    //클릭하면 셋무비셀렉티드 안에 해당 영화정보를 전달
    setMovieSelected(movies);
  };
  // console.log(id)
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movies) => (
            <img
              key={movies.id}
              // isLargeRow면은 row__posterLarge로 클래스 네임을 하겠다.
              // LargeRow면은 backdrop_path이미지를 써야하고 아니면 poster_path이미지 사용.
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movies.poster_path : movies.backdrop_path
              }`}
              // 영화클릭시 모달창 띄우기
              onClick={() => handleClick(movies)}
              alt={movies.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>

      {/* ModalOpen이 true일 경우 */}
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
