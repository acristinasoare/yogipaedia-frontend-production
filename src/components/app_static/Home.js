import React from "react";
import PoseOfTheDay from "./PoseOfTheDay";
import TopNavBar from "../nav_and_search/TopNavBar";

import "../../styles/app_static_sass/home.scss";

const Home = () => {
	return (
		<>
			<div className="App">
				<TopNavBar />
				<div className="page-content__container">
					<PoseOfTheDay />
				</div>
			</div>
		</>
	);
};

export default Home;
