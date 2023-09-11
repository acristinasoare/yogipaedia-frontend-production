import React from "react";

import TopNavBar from "./TopNavBar";
import PoseOfTheDay from "./PoseOfTheDay";

const Home = () => {
	return (
		<>
			<div className="App">
				<header className="App-header" />
				<h1>yogipedia</h1>
			</div>
			<TopNavBar />
			<PoseOfTheDay />
		</>
	);
};

export default Home;
