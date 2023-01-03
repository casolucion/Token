import React, { useEffect } from "react";
import styles from "./styles/preventa.module.css";
import preventa from "../assets/image/PreventaToken-Nors.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Preventa = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div>
			<h2 className={`${styles.h2} ${styles.titulo} `}>Preventa</h2>

			<p className={styles.p}>
				Debes estar pendiente y no perder esta gran oportunidad, muy pronto te
				vamos a informar cómo puedes invertir en el Token de NormasSalud.
			</p>
			<section className={styles.container} data-aos="fade-up">
				<img src={preventa} alt="" className={styles.img} />
			</section>
		</div>
	);
};

export default Preventa;
