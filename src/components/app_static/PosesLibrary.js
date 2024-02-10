import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/poses-library.scss";
import TopNavBar from "../nav_and_search/TopNavBar";
import SideNavBar from "../nav_and_search/SideNavBar";
import PosePreview from "./PosePreview";
import FavouriteButton from "./FavouriteButton";
import Alert from "./Alert";
import Footer from "./Footer";
import backendHost from "../../config/backend-host";

const PosesLibrary = ({ currentUser, userId }) => {
  const [poses, setPoses] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSelectedFilter = (filter) => {
    setSelectedFilter(filter);
  };
  const handleClearFilter = () => {
    setSelectedFilter(null);
  };

  useEffect(() => {
    let endpoint = `${backendHost}/poses`;

    const categories = [
      "Core",
      "Seated",
      "Backbend",
      "Strengthening",
      "Chest Opening",
    ];
    const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];

    if (categories.includes(selectedFilter)) {
      endpoint = `${backendHost}/poses/category/${selectedFilter}`;
    } else if (difficultyLevels.includes(selectedFilter)) {
      endpoint = `${backendHost}/poses/level/${selectedFilter}`;
    }

    axios
      .get(endpoint)
      .then((response) => {
        const yogaPosesArray = response.data;

        const yogaPictures = yogaPosesArray.map((pose) => [
          pose.pose_id,
          pose.url_png,
          pose.pose_name,
          pose.sanskrit_name,
          pose.pose_benefits,
          pose.pose_description,
        ]);
        setPoses(yogaPictures);
      })
      .catch(() => setAlertMessage("Server Error.Please try again later"));
  }, [selectedFilter]);

  if (alertMessage) {
    return (
      <div>
        <div className="top-nav-bar">
          <TopNavBar userId={userId} currentUser={currentUser} />
        </div>
        <SideNavBar
          handleSelectedFilter={handleSelectedFilter}
          handleClearFilter={handleClearFilter}
        />
        <div className="alert-message">
          <Alert message={alertMessage} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="top-nav-bar">
        <TopNavBar />
      </div>
      <div className="side-bar">
        <SideNavBar
          handleSelectedFilter={handleSelectedFilter}
          handleClearFilter={handleClearFilter}
        />
      </div>
      <div className="poses-library">
        <div className="poses__container">
          {poses.map((pose, index) => (
            <div
              className="pose-preview__grid-item"
              key={index}
              onClick={() => {}}
            >
              <FavouriteButton
                className="pose-preview__grid-item--button"
                currentUser={currentUser}
                userId={userId}
                poseId={pose[0]}
              />
              <PosePreview
                className="pose-preview__grid-item--pose"
                currentUser={currentUser}
                userId={userId}
                poseId={pose[0]}
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
      <Footer />
    </div>
  );
};

export default PosesLibrary;
