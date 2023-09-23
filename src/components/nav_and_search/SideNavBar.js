// Search via two dropdown buttons: Difficulty Level/Type.
// Optional: My Flows
// Optional: Suggested Flows with options

import React from "react";
import { button } from "react-router-dom";
import "../../styles/nav_search_sass/side-nav-bar.scss";

const SideNavBar = ({ handleSelectedCategory, handleSelectedLevel }) => {
	return (
		<div className="sidebar-container">
			<div className="search-bar">
				<form>
					<input
						className="search-input"
						type="text"
						placeholder="Search by name ..."
					/>
					<button type="submit" className="search-button">
						Search
					</button>
				</form>
			</div>
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
				<button className="sidebar-button" onClick={handleSelectedLevel}>
					Beginner
				</button>
			</div>
			<div className="sidebar-div">
				<button className="sidebar-button" onClick={handleSelectedLevel}>
					Intermediate
				</button>
			</div>
			<div className="sidebar-div">
				<button className="sidebar-button" onClick={handleSelectedLevel}>
					Advanced
				</button>
			</div>
		</div>
	);
};

export default SideNavBar;
