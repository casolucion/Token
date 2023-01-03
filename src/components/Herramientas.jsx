import React, { Fragment, useEffect } from "react";
import imgHerramientas from "../assets/image/herramientas-salud.png";
import styles from "../components/styles/Herramientas.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Herramientas = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<Fragment>
			<h2 className={`${styles.h2} ${styles.container} `} data-aos="fade-left">
				¿Qué Contiene NormasSalud?
			</h2>
			<picture className={styles.container} data-aos="fade-left">
				<img src={imgHerramientas} alt="" className={styles.imgContainer} />
			</picture>
		</Fragment>
	);
};

export default Herramientas;
