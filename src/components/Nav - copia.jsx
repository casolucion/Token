import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/styles/Nav.module.css";

const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<input type="checkbox" id="navCheck" />
			<div className={styles.navHeader}>
				<div className={styles.navTitle}>NORS</div>
			</div>
			<div className={styles.navLinks}>
				<label htmlFor="navCheck">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>

			<div className={styles.navLinks}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/TokenEnglish">Token English</NavLink>
				<NavLink to="/WhitePaper">White Paper Español</NavLink>
				<NavLink to="/WhitePaperEn">WhitePaper English</NavLink>
				<a href="https://www.normassalud.com/" target="blank">
					NormasSalud
				</a>
			</div>
		</nav>
	);
};

export default Nav;
