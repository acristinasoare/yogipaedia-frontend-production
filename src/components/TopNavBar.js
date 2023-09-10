// fixed el at top of window. With logo.png (on click takes to home page), Search.js, MyAccount.js with hamburger menu (my poses, my flows, log out)

import React from "react";
import { Link } from "react-router-dom";
import "../styles/top-nav-bar.scss";
import SearchBox from "./SearchBox";
import NavMenu from "./NavMenu";

const TopNavBar = () => {
  return (
    <nav className="navbar-container">
      <SearchBox />
      <Link to="/">HOME</Link>
      <NavMenu />
    </nav>
    //home to be replaced with logo
  );
};

export default TopNavBar;
