import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

export default function NavDropDown({ itemList, buttonName }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	console.log(itemList);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	console.log(buttonName);
	return (
		<div>
			<Button
				id="fade-button"
				aria-controls={open ? "fade-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ paddingLeft: "16px" }}
			>
				{buttonName}
			</Button>

			<Menu
				id="fade-menu"
				MenuListProps={{
					"aria-labelledby": "fade-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{itemList?.map((item, index) => (
					<MenuItem key={index}>
						<Link
							to={item.path}
							onClick={handleClose}
							style={{ textDecoration: "none" }}
						>
							{item?.title}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
