import { Link } from "react-router-dom";
import "../../styles/nav_search_sass/top-nav-bar.scss";
import NavMenu from "./NavMenu";

const TopNavBar = ({ userId, currentUser }) => {
	return (
		<nav className="navbar-container">
			<div className="navbar-left">
				<Link to="/home">
					<img src="Logo.png" alt="yogipaedia-logo" />
				</Link>
			</div>
			<div className="navbar-right">
				<div className="poses-library__link">
					<Link to="/poses-library">Poses Library</Link>
				</div>
				<NavMenu userId={userId} currentUser={currentUser} />
			</div>
		</nav>
	);
};

export default TopNavBar;
