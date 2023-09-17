// Small version of Pose.js, with name and photo. clickable -  links to main Pose.js

import React from "react";
import "../../styles/app_static_sass/pose-preview.scss";

const PosePreview = ({ pose }) => {
  return (
    <div className="pose-preview__container">
      <img className="pose-preview__image" src={pose} alt="yoga-pose" />
    </div>
  );
};

export default PosePreview;
