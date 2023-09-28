// Small version of Pose.js, with name and photo. clickable -  links to main Pose.js

import React, { useState, useEffect } from "react";
import "../../styles/app_static_sass/pose-preview.scss";
import PoseDetails from "./PoseDetails";
import axios from "axios";
import FavouriteButton from "./FavouriteButton";

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
  const currentUser = localStorage.getItem("currentUser");
  console.log("poseId at top of PosePreview works");
  console.log(poseId);

  useEffect(() => {
    // Fetch user's favourite poses and check if the current pose is in favourites
    axios
      .get(`/favourites/${currentUser}`)
      .then((response) => {
        console.log(response);
        const favouritePoseIds = response.data.map(({ pose_id }) => pose_id);
        console.log(favouritePoseIds);
        setIsFavourite(favouritePoseIds.includes(poseId));
      })
      .catch((error) => console.error("Error fetching favorites:", error));
  }, [currentUser, poseId]);

  const handleFavouriteClick = () => {
    console.log("just clicked the favourites button");
    console.log(currentUser);
    console.log(poseId);
    if (!isFavourite) {
      axios
        .post("/favourites", {
          userId: currentUser,
          poseId: poseId,
        })
        .then(() => setIsFavourite(true))
        .catch((error) => console.error("Error adding favorite:", error));
    } else {
      axios
        .delete("/favourites", {
          data: { userId: currentUser, poseId: poseId }, // Send data in the request body
        })
        .then(() => setIsFavourite(false))
        .catch((error) => console.error("Error removing favorite:", error));
    }
  };

  return (
    <div className="pose-preview__container">
      <img className="pose-preview__image" src={poseImage} alt="yoga-pose" />
      <FavouriteButton poseId={poseId} />
      <PoseDetails
        handleFavouriteClick={() => handleFavouriteClick(userId, poseId)}
        userId={userId}
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
