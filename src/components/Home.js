import React from "react";
import TopNavBar from "./TopNavBar";
import PoseOfTheDay from "./PoseOfTheDay";

const Home = () => {
	return (
		<>
			<div className="App">
				<TopNavBar />
				<PoseOfTheDay />
			</div>
		</>
	);
};

export default Home;
