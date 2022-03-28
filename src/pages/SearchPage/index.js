import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import "./SearchPage.css";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const useQuery =() =>{
    // useLocation에는 search한 url정보들이 들어있음.
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  // 상단 url중에 q=(여기에 들어가는 것이 searchTerm)
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 2000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  //debouncedSearchTerm이 변할때마다 fetchSearchMovie 함수 콜함
  
  const fetchSearchMovie = async (searchTerm) => {
    // console.log("searchTerm", searchTerm);
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      alert(`error: ${error}`);
    }
  }

  const renderSearchResults = () => {
    return (
      searchResults.length > 0 ? (
        <section className="search-container">
        {searchResults.map((movie) => {
          // (데이터가 있는 경우) backdrop_path 이미지가 있고 person 타입이 아닌 경우
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            // wide500사이즈
            const movieImageUrl =
            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
          return (
              <div className="movie" key={movie.id}>
                {/* :movie.id로 페이지 이동 -> app.js에 선언한 바에 따라 detail페이지로 이동함 */}
                <div className="movie__column-poster"  onClick={() => navigate(`/${movie.id}`)}>
                <img className="movie__poster" src={movieImageUrl} alt="movie poster"/>
                </div>
              </div>
            );
          }
        })}
        </section>
        // (데이터 없는 경우)
      ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            {debouncedSearchTerm}에 맞는 결과가 없습니다.
          </p>
        </div>
      </section>
    ))}


  return renderSearchResults();
}
