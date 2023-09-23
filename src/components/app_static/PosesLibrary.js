import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/poses-library.scss";
import TopNavBar from "../nav_and_search/TopNavBar";
import SideNavBar from "../nav_and_search/SideNavBar";
import PosePreview from "./PosePreview";
import Alert from "./Alert";

const PosesLibrary = () => {
  const [poses, setPoses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
  const handleClearFilter = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    let endpoint = "/poses1";

    if (selectedCategory) {
      endpoint = `/poses/category/${selectedCategory}`;
    }

    axios
      .get(endpoint)
      .then((response) => {
        console.log(response);
        const yogaPosesArray = response.data;
        console.log(yogaPosesArray);
        const yogaPictures = yogaPosesArray.map((pose) => [
          pose.url_png,
          pose.pose_name,
          pose.sanskrit_name,
          pose.pose_benefits,
          pose.pose_description,
        ]);
        setPoses(yogaPictures);
        console.log(yogaPictures);
        console.log(yogaPictures.length);
      })
      .catch(() => setAlertMessage("Server Error. Please try again later."));
  }, [selectedCategory]);

  if (alertMessage) {
    return (
      <div>
        <div className="top-nav-bar">
          <TopNavBar />
        </div>
        <SideNavBar
          handleSelectedCategory={handleSelectedCategory}
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
          handleSelectedCategory={handleSelectedCategory}
          handleClearFilter={handleClearFilter}
        />
      </div>
      <div className="page-content__container">
        <div className="poses__library">
          <div className="poses__container">
            {poses.map((pose, index) => (
              <div className="grid-item" key={index} onClick={() => {}}>
                <PosePreview
                  poseImage={pose[0]}
                  englishName={pose[1]}
                  sanskritName={pose[2]}
                  poseBenefits={pose[3]}
                  poseDescription={pose[4]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosesLibrary;
