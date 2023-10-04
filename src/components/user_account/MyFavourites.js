import React from "react";
import TopNavBar from "../nav_and_search/TopNavBar";
import MyPoses from "./MyPoses";
import Footer from "../app_static/Footer";
import "../../styles/user_account_sass/my-favourites.scss";

const MyFavourites = ({ userId, currentUser }) => {
	return (
		<div>
			<div className="top-nav-bar">
				<TopNavBar userId={userId} currentUser={currentUser} />
			</div>

			<MyPoses userId={userId} currentUser={currentUser} />

			<Footer />
		</div>
	);
};
export default MyFavourites;
