import React from "react";
import "../../styles/nav_search_sass/side-nav-bar.scss";

const SideNavBar = ({
  handleSelectedCategory,
  handleSelectedLevel,
  handleClearFilter,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedCategory("Core")}
        >
          Core
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedCategory("Seated")}
        >
          Seated
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedCategory("Strengthening")}
        >
          Strengthening
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedCategory("Chest Opening")}
        >
          Chest Opening
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedCategory("Backbend")}
        >
          Backbend
        </button>
      </div>
      <div className="sidebar-title">Skill level</div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedLevel("Beginner")}
        >
          Beginner
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedLevel("Intermediate")}
        >
          Intermediate
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedLevel("Advanced")}
        >
          Advanced
        </button>
      </div>
      <button
        type="submit"
        className="clear-filter"
        onClick={handleClearFilter}
      >
        Clear filter
      </button>
    </div>
  );
};

export default SideNavBar;
