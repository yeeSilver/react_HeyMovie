import React from 'react';
import "./Nav.css";
export default function Nav() {
  return (
    <nav>
      <img alt='logo'
      src='../img/logo.png'
      className='nav__logo'
      onClick={() => window.location.reload()}
      >
      </img>

      <img
      alt="user avatar"
      src="../img/default_avatar.png"
      className='nav__avatar'
      >
      </img>
    </nav>
  )
};
