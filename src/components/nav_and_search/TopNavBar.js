// fixed el at top of window. With logo.png (on click takes to home page), Search.js, MyAccount.js with hamburger menu (my poses, my flows, log out)

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav_search_sass/top-nav-bar.scss";
import NavMenu from "./NavMenu";

const TopNavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <a className="navbar-container__logo--link" href="/home">
          <img src="Yogipedia.png" alt="yogipedia-logo" />
        </a>
      </div>
      <div className="navbar-right">
        <div className="poses-library__link">
          <Link to="/poses-library">Poses Library</Link>
        </div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default TopNavBar;
