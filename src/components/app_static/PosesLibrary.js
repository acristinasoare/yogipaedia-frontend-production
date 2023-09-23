import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/poses-library.scss";
import TopNavBar from "../nav_and_search/TopNavBar";
import SideNavBar from "../nav_and_search/SideNavBar";
import PosePreview from "./PosePreview";

const PosesLibrary = () => {
  const [poses, setPoses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
  const handleClearFilter = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    let endpoint = "/poses";

    if (selectedCategory) {
      endpoint = `/poses/category/${selectedCategory}`;
    }

    axios.get(endpoint).then((response) => {
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
    });
  }, [selectedCategory]);

  console.log(`The selected category data as: ${selectedCategory}`);

  return (
    <div>
      <div className="top-nav-bar">
        <TopNavBar handleClearFilter={handleClearFilter} />
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
