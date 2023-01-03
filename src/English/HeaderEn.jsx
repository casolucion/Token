import React from "react";
import Cabecera from "../assets/image/token-normassalud.png";
import styles from "../components/styles/Header.module.css";

function Header() {
	const header = Cabecera;

	return (
		<section className={styles.header}>
			<img src={header} alt="" className={styles.img} />
		</section>
	);
}

export default Header;
