import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Nav.css";

const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home </Link>
				</li>
				<li>
					<Link to="/TokenEnglish">Token English </Link>
				</li>
				<li>
					<Link to="/WhitePaper">White Paper Español</Link>
				</li>
				<li>
					<Link to="/WhitePaperEn"> WhitePaper English </Link>
				</li>
				<li>
					<a href="https://www.normassalud.com/" target="blank">
						NormasSalud
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
