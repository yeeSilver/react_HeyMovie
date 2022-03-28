import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { FiSearch } from "react-icons/fi";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

export default function Nav() {
  const [show, setshow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [inputOpen, setInputOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value)
    navigate(`/search?q=${e.target.value}`);
  };

  const handleInput = () => {
    console.log(inputOpen);
    if (!inputOpen) {
      setInputOpen(true);
    } else {
      setInputOpen(false);
    }
  };

  return (
    // show가 true일때는 nav__lack 클래스 넣어주기
    /*
    1. <조건문> || <조건문이 거짓일 때 실행될 코드>
    2. <조건문> && <조건문이 참일 때 실행될 코드>
    */

    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="logo"
        src="https://user-images.githubusercontent.com/48678872/159433059-c2216ee0-53f8-449a-aa6f-61dbf9086edf.png"
        className="nav__logo"
        onClick={() => window.location.assign('/')}
       />

      {inputOpen && (
        <input
          className="nav__input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          // setInputOpen={setInputOpen}
          placeholder="제목,사람, 장르 검색"
        />
      )}
      
      <div className="nav__rightBar">
        <button className="nav__input-btn" onClick={handleInput}>
          <FiSearch color="#fff" />
        </button>
        <button  className="nav__bookmark-btn">
          <BsBookmarkStar color="#fff" size="24px"/>
        </button> 
        <img
          alt="user avatar"
          src="https://user-images.githubusercontent.com/48678872/159111910-222a3b1e-5e45-4b81-9a29-0b205e37569e.png"
          className="nav__avatar"
        />
      </div>
    </nav>
  );
}
