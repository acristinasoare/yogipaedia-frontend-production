// hamburger icon that acts as a dropdown button, with links to MyPoses, MyFlows, LogOut

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const App = () => {
// 	const [food, setFood] = React.useState("");

// 	const handleFoodChange = (event) => {
// 		setFood(event.target.value);
// 	};

// 	return (
// 		<div>
// 			<label>
// 				My Account
// 				<select value={food} onChange={handleFoodChange}>
// 					<option value="apple">Apple</option>
// 					<option value="banana">Banana</option>
// 					<option value="orange">Orange</option>
// 				</select>
// 			</label>
// 		</div>
// 	);
// };

// export default App;

import React, { useState } from "react";
import "../styles/nav-menu.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const handleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};
	const navigate = useNavigate();

	const handleLogOut = () => {
		// logic for handling log out and clearing user session to be inserted
		navigate("/"); // redirects user to log in page
	};

	const handleDelete = () => {
		//logic for handling delete account to be inserted
		navigate("/"); //redirects user to log in page
	};

	return (
		<div className="dropdown">
			<label onClick={handleDropdown}>
				My account
				{/* this icon doesn't render at the moment, so I'm commenting it out until we've solved the dropdown issue*/}
				{/* <span className="dropdown-menu" onClick={handleDropdown}>
					<FontAwesomeIcon icon={faBars} />
				</span> */}
				{dropdownOpen && (
					<div className="dropdown-content">
						<ul>
							<li>
								<Link to="/my-favourites">My Favourites</Link>
							</li>
							{/* the dropdown functionality works fine with the remaining buttons commented out. When they're uncommented, 
							the handleLogOut takes over onClick, and we lose access to handleDropdown */}

							{/* <li>
								<button onClick={handleLogOut}>Logout</button>
							</li>
							<li>
								<button onClick={handleDelete}>Delete my account</button>
							</li> */}
						</ul>
					</div>
				)}
			</label>
		</div>

		//logout and delete account have to be buttons to be able to add logic for loging out/deleting account
		//Holly you can add styling so the buttons have no margins
		// and the background color is the same as the dropdown so it looks like a normal link rather than a button
	);
};

export default NavMenu;
