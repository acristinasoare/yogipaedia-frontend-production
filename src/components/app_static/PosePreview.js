// Small version of Pose.js, with name and photo. clickable -  links to main Pose.js

import React, { useState } from "react";
import "../../styles/app_static_sass/pose-preview.scss";
import PoseDetails from "./PoseDetails";
import axios from "axios";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

const PosePreview = ({
  userId,
  poseId,
  poseImage,
  sanskritName,
  englishName,
  poseBenefits,
  poseDescription,
  poseLevel,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavouriteClick = (userId, poseId) => {
    console.log(userId);
    console.log(poseId);
    axios.post("/favourites", {
      userId: userId,
      poseId: poseId,
    });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="pose-preview__container">
      <img className="pose-preview__image" src={poseImage} alt="yoga-pose" />
      <button
        className="pose-preview__favourite-button"
        onClick={() => handleFavouriteClick(userId, poseId)}
      >
        {isFavourite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#ffc2cd"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg> //svg code copied from bootstrap website
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#ffc2cd"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        )}
      </button>
      <PoseDetails
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
