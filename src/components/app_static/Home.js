import React from "react";
import PoseOfTheDay from "./PoseOfTheDay";
import TopNavBar from "../nav_and_search/TopNavBar";
import Footer from "./Footer";

import "../../styles/app_static_sass/home.scss";

const Home = ({ userId }) => {
	return (
		<>
			<div className="top-nav-bar">
				<TopNavBar userId={userId} />
			</div>
			<div>
				<PoseOfTheDay userId={userId} />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
