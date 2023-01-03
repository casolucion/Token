import React from "react";
import styles from "./styles/PiePagina.module.css";

const PiePagina = () => {
	return (
		<div className={styles.container}>
			<section>
				<p className={styles.p}>
					info@normasSalud.com, Copyright NormasSalud.com
				</p>
			</section>
			<section className={styles.icons}>
				<a
					href="https://twitter.com/NormasSalud"
					target="black"
					className={styles.iconYoutube}
				>
					<ion-icon size="large" name="logo-youtube"></ion-icon>
				</a>

				<a
					href="https://twitter.com/NormasSalud"
					target="black"
					className={styles.linkedin}
				>
					<ion-icon size="large" name="logo-linkedin"></ion-icon>
				</a>
				<a
					className={styles.twitter}
					href="https://twitter.com/NormasSalud"
					target="black"
				>
					<ion-icon size="large" name="logo-twitter"></ion-icon>
				</a>
			</section>
		</div>
	);
};

export default PiePagina;
