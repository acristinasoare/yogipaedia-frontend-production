//users favourite poses
import React from "react";
import TopNavBar from "../nav_and_search/TopNavBar";
import MyPoses from "./MyPoses";

const MyFavourites = ({ userId }) => {
	return (
		<div>
			<div className="top-nav-bar">
				<TopNavBar />
			</div>
			<div className="page-content__container">
				<MyPoses userId={userId} />
			</div>
		</div>
	);
};

export default MyFavourites;
