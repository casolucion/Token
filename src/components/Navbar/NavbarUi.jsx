import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link as RouterLink } from "react-router-dom";
import NavDropDown from "./NavDropDown";
import { MenuItems } from "../MenuItems";
import { MenuItems2 } from "../MenuItems2";

const headersData = [
	{
		label: "Home",
		href: "/",
	},

	{
		label: "NormasSalud",
		href: "google.com",
	},
];

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#04142c",
		paddingRight: "79px",
		paddingLeft: "118px",
		"@media (max-width: 900px)": {
			paddingLeft: 0,
		},
	},
	logo: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left",
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
		color: "#fff",
	},
	toolbar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		color: "#000",
	},
	drawerContainer: {
		padding: "0px 0px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		color: "red",
	},

	botones: { color: "red" },
}));

export default function Header() {
	const { header, logo, menuButton, toolbar, drawerContainer, botones } =
		useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{femmecubatorLogo}
				<div className={drawerContainer}>
					<NavDropDown
						className={botones}
						itemList={MenuItems}
						buttonName="Boton1"
					/>

					<NavDropDown
						className={botones}
						itemList={MenuItems2}
						buttonName="Boton2"
					/>
				</div>

				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}
				>
					<DehazeIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={drawerContainer}>
						{getDrawerChoices()}

						<NavDropDown
							className={botones}
							itemList={MenuItems}
							buttonName="Boton1"
						/>

						<NavDropDown
							className={botones}
							itemList={MenuItems2}
							buttonName="Boton2"
						/>
					</div>
				</Drawer>

				<div>{femmecubatorLogo}</div>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					key={href}
					{...{
						component: RouterLink,
						to: href,
						color: "inherit",
						style: { textDecoration: "none" },
						key: label,
					}}
				>
					<MenuItem className={botones}>{label}</MenuItem>
				</Link>
			);
		});
	};

	const femmecubatorLogo = (
		<Typography variant="h6" component="h1" className={logo}>
			Epic
		</Typography>
	);

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					key={href}
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: menuButton,
					}}
				>
					{label}
				</Button>
			);
		});
	};

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
