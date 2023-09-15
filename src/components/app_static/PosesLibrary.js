import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/poses-library.scss";
import TopNavBar from "../nav_and_search/TopNavBar";

const PosesLibrary = () => {
	const [poses, setPoses] = useState([]);
	useEffect(() => {
		axios
			.get("https://yoga-api-nzy4.onrender.com/v1/poses")
			.then((response) => {
				const yogaPosesArray = response.data;
				const yogaPictures = yogaPosesArray.map((pose) => pose.url_png);
				setPoses(yogaPictures);
				console.log(yogaPictures.length);
			});
	}, []);

	const handleClick = () => {
		//logic for opening modal with card info
	};

	return (
		<div>
			<TopNavBar />
			<div className="page-content__container">
				<div className="poses__library">
					<div className="poses__container">
						{poses.map((pose, index) => (
							<div className="grid-item" key={index}>
								<button class="pose__button" onClick={handleClick}>
									<img src={pose} alt="yoga-pose" />
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
