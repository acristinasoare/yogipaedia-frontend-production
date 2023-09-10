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

  return (
    <div className="dropdown" onClick={handleDropdown}>
      <span cassName="dropdown-menu">
        My Account <FontAwesomeIcon icon={faBars} />
      </span>
      {dropdownOpen && (
        <div className="dropdown-content">
          <Link to="/myfavoruites">My Favourites</Link>
          <div>Logout</div>
          <div>Delete my account</div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
