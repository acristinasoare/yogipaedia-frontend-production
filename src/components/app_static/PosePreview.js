// Small version of Pose.js, with name and photo. clickable -  links to main Pose.js

import React from "react";
import "../../styles/app_static_sass/pose-preview.scss";
import PoseDetails from "./PoseDetails";

const PosePreview = ({
	poseImage,
	sanskritName,
	englishName,
	poseBenefits,
	poseDescription,
}) => {
	return (
		<div className="pose-preview__container">
			{/* <h1 className="pose-preview__english-name">{englishName}</h1>
			<h2 className="pose-preview__sanskrit-name">{sanskritName}</h2> */}
			<img className="pose-preview__image" src={poseImage} alt="yoga-pose" />
			<PoseDetails
				poseImage={poseImage}
				englishName={englishName}
				sanskritName={sanskritName}
				poseBenefits={poseBenefits}
				poseDescription={poseDescription}
			/>
		</div>
	);
};

export default PosePreview;
