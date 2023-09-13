// requires auth to render, with hamburger menu and access to saved data
// Links to My Poses, optional: My Flows, Log out (return to initial log in page), Delete my account (Are you sure you want to delete your account, you’ll lose all your saved flows warning etc, then We’re sorry to see you go, return to home page button).

import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../authorisation/LogOut";

import "../../styles/user_account_sass/my-account.scss";

const MyAccount = () => {
	return (
		<>
			<div>
				<Link to="/poses-library">My saved poses</Link>
			</div>
			<div>
				<Link to="/my-flows">My saved flows</Link>
			</div>
			<div>
				<LogOut />
			</div>
		</>
	);
};

export default MyAccount;
