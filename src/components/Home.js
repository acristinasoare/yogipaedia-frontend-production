import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import TopNavBar from "./TopNavBar";

const Home = () => {
	const { logOut } = useUserAuth();
	const navigate = useNavigate();

	return (
		<>
			<div className="App">
				<header className="App-header" />
				<h1>YOGIPEDIA</h1>
			</div>
			<TopNavBar />
		</>
	);
};

export default Home;
