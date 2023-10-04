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
		const currentUser = localStorage.getItem("currentUser");
		let endpoint = `https://yogipaedia-bj0y.onrender.com/favourites/${currentUser}`;

		axios
			.get(endpoint)
			.then((response) => {
				const myPosesArray = response.data;
				const myPosePictures = myPosesArray.map((pose) => [
					pose.pose_id,
					pose.url_png,
					pose.pose_name,
					pose.sanskrit_name,
					pose.pose_benefits,
					pose.pose_description,
				]);
				setPoses(myPosePictures);
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
		<div className="poses__library">
			<div className="poses__container">
				{poses.map((pose, index) => (
					<div className="grid-item" key={index} onClick={() => {}}>
						<FavouriteButton
							currentUser={currentUser}
							userId={userId}
							poseId={pose[0]}
						/>
						<PosePreview
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
