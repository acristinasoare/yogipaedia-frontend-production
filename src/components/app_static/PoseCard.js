// Small version of Pose.js, with name and photo. clickable -  links to main Pose.js

import React from "react";
import TopNavBar from "../nav_and_search/TopNavBar";
import SideNavBar from "../nav_and_search/SideNavBar";
import "../../styles/app_static_sass/pose-preview.scss";

const PosePreview = () => {
  return (
    <div>
      <TopNavBar />
      <SideNavBar />
      <div>PoseCard</div>
    </div>
  );

  // logic goes here
};

export default PosePreview;
