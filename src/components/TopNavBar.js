// fixed el at top of window. With logo.png (on click takes to home page), Search.js, MyAccount.js with hamburger menu (my poses, my flows, log out)

import React from "react";
import { Link } from "react-router-dom";
import "../styles/top-nav-bar.scss";
import NavMenu from "./NavMenu";
import LogOut from "../components/LogOut";

const TopNavBar = () => {
	return (
		<nav className="navbar-container">
			<div>
				<Link to="/poses-library">Poses Library</Link>
			</div>
			<div>
				<Link to="/">HOME</Link>
			</div>
			<div>
				<LogOut />
			</div>
		</nav>
		//home to be replaced with logo
	);
};

export default TopNavBar;
