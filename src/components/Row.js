import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    //영화 정보들 movies에 넣어주기
    setMovies(request.data.results);
  };
  console.log(id)
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}>{"<"}</span>
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
              alt={movies.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}>{">"}</span>
        </div>
      </div>
    </section>
  );
}
