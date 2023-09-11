import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";
import App from "../src/components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
