import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../authorisation/ProtectedRoute";
import { UserAuthContextProvider } from "../../context/UserAuthContext";

import LoginModal from "../authorisation/LoginModal";
import SignUp from "../authorisation/SignUp";
import Home from "./Home";
import PoseOfTheDay from "./PoseOfTheDay";
import PosesLibrary from "./PosesLibrary";
import MyFavourites from "../user_account/MyFavourites";
import TopNavBar from "../nav_and_search/TopNavBar";

import "../../styles/app_static_sass/app.scss";

const App = () => {
	return (
		<>
			<UserAuthContextProvider>
				<TopNavBar />
				<Routes>
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path="/" element={<LoginModal />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/home" element={<PoseOfTheDay />} />
					<Route path="/poses-library" element={<PosesLibrary />} />
					<Route path="/my-favourites" element={<MyFavourites />} />
				</Routes>
			</UserAuthContextProvider>
		</>
	);
};

export default App;
