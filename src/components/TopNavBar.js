// fixed el at top of window. With logo.png (on click takes to home page), Search.js, MyAccount.js with hamburger menu (my poses, my flows, log out)

import React from "react";
import "../styles/top-nav-bar.scss";
import SearchBox from "./SearchBox";
import MyAccount from "./MyAccount";
import NavMenu from "./NavMenu";

const TopNavBar = () => {
	return (
		<nav className="navbar-container">
			<div>
				<SearchBox />
			</div>
			<div>
				<a className="navbar-container--logo__link" href="/home">
					<img src="../../assets/logo-pink.png" />
				</a>
			</div>
			<div>
				<MyAccount />
			</div>
			<div>
				<NavMenu />
			</div>
		</nav>
	);
};

export default TopNavBar;
