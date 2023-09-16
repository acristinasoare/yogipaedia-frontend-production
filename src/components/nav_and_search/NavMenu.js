// hamburger icon that acts as a dropdown button, with links to MyPoses, MyFlows, LogOut

import React, { useState } from "react";
import "../../styles/nav_search_sass/nav-menu.scss";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import "./ci_hamburger-md.png";

const NavMenu = () => {
  const { logOut, unsubscribe } = useUserAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();

  const handleLogOut = () => {
    // logic for handling log out and clearing user session to be inserted. check context/UserAuthContext.js for clues. All covered by firebase.
    logOut();
    navigate("/"); //redirects user to log in page
  };

  const handleDelete = () => {
    unsubscribe();
    //logic for handling delete account to be inserted. check context/UserAuthContext.js for clues. All covered by firebase.
    navigate("/"); //redirects user to log in page
  };

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={handleDropdown}>
        <img
          className="dropdown__hamburger-icon"
          src="ci_hamburger-md.png"
          alt="hamburger-menu"
        />
      </div>
      {dropdownOpen && (
        <div className="dropdown-content">
          <ul>
            <li className="dropdown-content__item">
              <Link to="/my-favourites">My Favourites</Link>
            </li>

            <li className="dropdown-content__item">
              <Link to="/" onClick={handleLogOut}>
                Log out
              </Link>
            </li>
            <li className="dropdown-content__item">
              <Link to="/" onClick={handleDelete}>
                Delete my account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>

    //logout and delete account have to be buttons to be able to add logic for loging out/deleting account
    //Holly you can add styling so the buttons have no margins
    // and the background color is the same as the dropdown so it looks like a normal link rather than a button
  );
};

export default NavMenu;
