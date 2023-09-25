// User's saved (favourited) Pose.js cards. Requires user to be logged in to render. Link in MyAccount dropdown menu.
// Display favourite poses - similar to category/search results. Each pose on click opens pose component. Remove from favourites option - heart will be filled, then click to remove, outline, re-render.

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Alert from "./Alert";

import PosePreview from "../app_static/PosePreview";
import TopNavBar from "../nav_and_search/TopNavBar";

import "../../styles/user_account_sass/my-poses.scss";

const MyPoses = () => {
	const [poses, setPoses] = useState([]);

	// const [userId, setUserId] = useState(null);

	// const [alertMessage, setAlertMessage] = useState(null);

	useEffect(() => {
		let endpoint = "/favourites";

		axios
			.get(endpoint)
			.then((response) => {
				const myFavouritesArray = response.data;
				console.log(myFavouritesArray);

				const favouritesPictures = myFavouritesArray.map((pose) => [
					pose.url_png,
					pose.pose_name,
					pose.sanskrit_name,
					pose.pose_benefits,
					pose.pose_description,
				]);
				setPoses(favouritesPictures);
			})
			.catch((e) => console.log(e));
	}, []);

	// if (alertMessage) {
	// 	return (
	// 		<div>
	// 			<div className="alert-message">
	// 				<Alert message={alertMessage} />
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div>
			<div className="poses__container">
				{poses.map((pose, index) => (
					<div className="grid-item" key={index} onClick={() => {}}>
						<PosePreview
							poseImage={pose[0]}
							englishName={pose[1]}
							sanskritName={pose[2]}
							poseBenefits={pose[3]}
							poseDescription={pose[4]}
							poseLevel={pose[5]}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyPoses;
