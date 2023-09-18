import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/app_static_sass/poses-library.scss";
import TopNavBar from "../nav_and_search/TopNavBar";
import SideNavBar from "../nav_and_search/SideNavBar";
import PosePreview from "./PosePreview";

const PosesLibrary = () => {
	const [poses, setPoses] = useState([]);

	useEffect(() => {
		axios
			.get("https://yoga-api-nzy4.onrender.com/v1/poses/")
			.then((response) => {
				console.log(response);
				const yogaPosesArray = response.data;
				console.log(yogaPosesArray);
				const yogaPictures = yogaPosesArray.map((pose) => [
					pose.url_png,
					pose.english_name,
					pose.sanskrit_name_adapted,
					pose.pose_benefits,
					pose.pose_description,
				]);
				setPoses(yogaPictures);
				console.log(yogaPictures);
				console.log(yogaPictures.length);
			});
	}, []);

	return (
		<div>
			<div className="top-nav-bar">
				<TopNavBar />
			</div>
			<div className="side-bar">
				<SideNavBar />
			</div>
			<div className="page-content__container">
				<div className="poses__library">
					<div className="poses__container">
						{poses.map((pose, index) => (
							<div className="grid-item" key={index}>
								<button className="pose__button">
									<PosePreview
										poseImage={pose[0]}
										englishName={pose[1]}
										sanskritName={pose[2]}
										poseBenefits={pose[3]}
										poseDescription={pose[4]}
									/>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PosesLibrary;
