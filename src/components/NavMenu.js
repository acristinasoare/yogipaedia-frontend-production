// hamburger icon that acts as a dropdown button, with links to MyPoses, MyFlows, LogOut

import React, { useState } from "react";
import "../styles/nav-menu.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogOut = () => {
    // logic for handling log out
    //should redirect user to log in page
  };

  const handleDelete = () => {
    //logic for handling delete account
    //should redirect user to log in page
  };

  return (
    <div className="dropdown" onClick={handleDropdown}>
      <span cassName="dropdown-menu">
        My Account <FontAwesomeIcon icon={faBars} />
      </span>
      {dropdownOpen && (
        <div className="dropdown-content">
          <ul>
            <li>
              <Link to="/myfavoruites">My Favourites</Link>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
            <li>
              <button onClick={handleDelete}>Delete my account</button>
            </li>
          </ul>
        </div>
      )}
    </div>

    //logout and delete account have to be buttons to be able to add logic for loging out/deleting account
    //Holly you can add styling so the buttons have no margins
    // and  background color is the same as the dropdown so it looks like a normal link rather than a button
  );
};

export default NavMenu;
