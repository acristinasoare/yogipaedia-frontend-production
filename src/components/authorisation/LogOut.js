import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

const LogOut = () => {
	const { logOut } = useUserAuth();
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await logOut();
			navigate("https://yogipaedia.onrender.com.com/");
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<>
			<div className="d-grid gap-2">
				<Button variant="primary" onClick={handleLogout}>
					Log out
				</Button>
			</div>
		</>
	);
};

export default LogOut;
