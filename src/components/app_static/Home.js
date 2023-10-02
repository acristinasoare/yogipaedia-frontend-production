import React, { useState } from "react";
import PoseOfTheDay from "./PoseOfTheDay";
import TopNavBar from "../nav_and_search/TopNavBar";
import Footer from "./Footer";
import { auth } from "../../config/firebase";

import "../../styles/app_static_sass/home.scss";

const Home = ({ currentUser, userId }) => {
	// const [userId, setUserId] = useState(null);
	// const [currentUser, setCurrentUser] = useState("");
	// setCurrentUser(localStorage.getItem("currentUser"));

	// const currentUser = localStorage.getItem("currentUser");

	console.log(`home.js current user is ${currentUser}`);
	console.log(`home.js userId is ${userId}`);

	return (
		<>
			<div className="top-nav-bar">
				<TopNavBar userId={userId} currentUser={currentUser} />
			</div>
			<div>
				<PoseOfTheDay userId={userId} currentUser={currentUser} />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
