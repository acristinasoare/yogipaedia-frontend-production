import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../app_static/Alert";
import PosePreview from "../app_static/PosePreview";
import "../../styles/user_account_sass/my-poses.scss";
import FavouriteButton from "../app_static/FavouriteButton";

const MyPoses = ({ userId, currentUser }) => {
	const [poses, setPoses] = useState([]);
	const [alertMessage, setAlertMessage] = useState(null);

	useEffect(() => {
		// const currentUser = localStorage.getItem("currentUser");
		let endpoint = `https://yogipaedia-bj0y.onrender.com/favourites/${userId}`;

		axios
			.get(endpoint)
			.then((response) => {
				const myFavouritesArray = response.data;
				console.log(myFavouritesArray);
				const myFavouritesPictures = myFavouritesArray.map((pose) => [
					pose.pose_id,
					pose.url_png,
					pose.pose_name,
					pose.sanskrit_name,
					pose.pose_benefits,
					pose.pose_description,
				]);
				setPoses(myFavouritesPictures);
			})
			.catch(() =>
				setAlertMessage(
					"Server error. Unable to retrieve user's favourite poses."
				)
			);
	}, []);

	if (alertMessage) {
		return (
			<div className="alert-message">
				<Alert message={alertMessage} />
			</div>
		);
	}

	return (
		<div className="my-favourites__container">
			<div className="my-favourites__title">
				<h2 className="title-text">My Favourite Poses</h2>
			</div>
			<div className="my-poses__container">
				{poses.map((pose, index) => (
					<div className="my-poses__grid-item" key={index} onClick={() => {}}>
						<FavouriteButton
							className="my-poses__grid-item--button"
							currentUser={currentUser}
							userId={userId}
							poseId={pose[0]}
						/>
						<PosePreview
							className="my-poses__grid-item--pose"
							currentUser={currentUser}
							poseId={pose[0]}
							userId={userId}
							poseImage={pose[1]}
							englishName={pose[2]}
							sanskritName={pose[3]}
							poseBenefits={pose[4]}
							poseDescription={pose[5]}
							poseLevel={pose[6]}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyPoses;
