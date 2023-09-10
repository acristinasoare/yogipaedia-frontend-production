import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

import TopNavBar from "./TopNavBar";

const Home = () => {
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
