// User's saved (favourited) Pose.js cards. Requires user to be logged in to render. Link in MyAccount dropdown menu.
// Display favourite poses - similar to category/search results. Each pose on click opens pose component. Remove from favourites option - heart will be filled, then click to remove, outline, re-render.

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Alert from "./Alert";

import PosePreview from "../app_static/PosePreview";
import "../../styles/user_account_sass/my-poses.scss";

const MyPoses = ({ userId }) => {
	const [poses, setPoses] = useState([]);
	const currentUser = localStorage.getItem("currentUser");
	console.log(currentUser);

	// const [alertMessage, setAlertMessage] = useState(null);

	useEffect(() => {
		let endpoint = `/favourites/${currentUser}`;

		axios
			.get(endpoint)
			.then((response) => {
				const myFavouritesArray = response.data;
				console.log(myFavouritesArray);

				// const favouritesPictures = myFavouritesArray.map((pose) => [
				// 	pose.url_png,
				// 	pose.pose_name,
				// 	pose.sanskrit_name,
				// 	pose.pose_benefits,
				// 	pose.pose_description,
				// ]);
				setPoses(myFavouritesArray);
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
							poseImage={pose.url_png}
							englishName={pose.pose_name}
							sanskritName={pose.sanskrit_name}
							poseBenefits={pose.pose_benefits}
							poseDescription={pose.pose_description}
							poseLevel={pose.level}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyPoses;
