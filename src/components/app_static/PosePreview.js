// Small version of Pose.js, with name and photo. clickable -  links to main Pose.js

import React from "react";
import "../../styles/app_static_sass/pose-preview.scss";
import PoseDetails from "./PoseDetails";
// import FavouriteButton from "./FavouriteButton";

const PosePreview = ({
	currentUser,
	userId,
	poseId,
	poseImage,
	sanskritName,
	englishName,
	poseBenefits,
	poseDescription,
	poseLevel,
}) => {
	// const currentUser = localStorage.getItem("currentUser");

	console.log(`pose preview current user is ${currentUser}`);
	console.log(`pose preview userId is ${userId}`);
	return (
		<div className="pose-preview__container">
			<img className="pose-preview__image" src={poseImage} alt="yoga-pose" />
			<PoseDetails
				userId={currentUser}
				poseId={poseId}
				poseImage={poseImage}
				englishName={englishName}
				sanskritName={sanskritName}
				poseBenefits={poseBenefits}
				poseDescription={poseDescription}
				poseLevel={poseLevel}
			/>
		</div>
	);
};

export default PosePreview;
