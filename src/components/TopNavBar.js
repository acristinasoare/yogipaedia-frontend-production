// fixed el at top of window. With logo.png (on click takes to home page), Search.js, MyAccount.js with hamburger menu (my poses, my flows, log out)

import React from "react";
import { Link } from "react-router-dom";
import "../styles/top-nav-bar.scss";
import PosesLibrary from "./PosesLibrary";
import MyAccount from "./MyAccount";
import NavMenu from "./NavMenu";
import "./Yogipedia.png";

const TopNavBar = () => {
	return (
		<nav className="navbar-container">
			<div>
				<Link to="/poses-library">Poses Library</Link>
			</div>
			<div>
				<a className="navbar-container--logo__link" href="/home">
					<img src="./Yogipedia.png" />
				</a>
			</div>
			<NavMenu />
		</nav>
	);
};

export default TopNavBar;
