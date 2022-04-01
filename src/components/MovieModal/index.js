import React, { useState, useEffect } from "react";
import "./MovieModal.css";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const [bookMarkOpen, setBookMarkOpen] = useState(false);
  const [pickMovies, setPickMovies] = useState([]);

  const handleBookMark = () => {
    let newMovieMark = {
      id: (title ? title : name),
      src: `https://image.tmdb.org/t/p/original${backdrop_path}`
    };
    if (bookMarkOpen) {
      setBookMarkOpen(false);
    } else {
      setBookMarkOpen(true);
      // pickArray.push(movieMark);
      // setPickMovies([...pickArray]);
      setPickMovies((prev) => [...prev, newMovieMark]);
      // window.localStorage.setItem("movie", JSON.stringify(movieMark));
    }

  };


  // console.log(title)
  return (
    <div className="con-modal">
      <div className="wrapper-modal">
        <div className="modal">
          <button className="close-modal" onClick={() => setModalOpen(false)}>
            ✖
          </button>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="modal_poster-img"
          />
          <div className="modal__content">
            <div className="modal__nav">
              <p className="modal__details">
                {release_date ? release_date : first_air_date}
              </p>
              <button className="nav__bookmark-btn" onClick={handleBookMark}>
                {bookMarkOpen ? (
                  <BsBookmarkStarFill color="#fff" size="24px" />
                ) : (
                  <BsBookmarkStar color="#fff" size="24px" />
                )}
              </button>
            </div>
            <h3 className="modal__title">{name ? name : title}</h3>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">평점 : {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
