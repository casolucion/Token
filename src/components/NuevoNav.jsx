import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import NavDropDown from "./Navbar/NavDropDown";
import { MenuItems } from "./MenuItems";
import { MenuItems2 } from "./MenuItems2";

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		setDropdown(false);
	};

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					EPIC
					<i className="fab fa-firstdraft" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<Link
							to="/services"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Services <i className="fas fa-caret-down" />
						</Link>
						casa
						{dropdown && (
							<NavDropDown itemList={MenuItems} buttonName="Boton1" />
						)}
						{dropdown && (
							<NavDropDown itemList={MenuItems2} buttonName="Boton2" />
						)}
					</li>
					<li className="nav-item">
						<Link
							to="/products"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							to="/sign-up"
							className="nav-links-mobile"
							onClick={closeMobileMenu}
						>
							Sign Up
						</Link>
					</li>
				</ul>
				<Button />
			</nav>
		</>
	);
}

export default Navbar;
