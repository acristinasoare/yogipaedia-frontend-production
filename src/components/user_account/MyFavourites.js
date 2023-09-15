//users favourite poses
import React from "react";
import TopNavBar from "../nav_and_search/TopNavBar";
import MyFlows from "./MyFlows";
import MyPoses from "./MyPoses";

const MyFavourites = () => {
	return (
		<div>
			<TopNavBar />
			<div>My Favourites Page</div>
			<MyFlows />
			<MyPoses />
		</div>
	);
};

export default MyFavourites;
