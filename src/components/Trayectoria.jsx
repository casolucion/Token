import React, { useEffect } from "react";
import imagenes from "../assets/image/trayectoria/imgsTrayectoria";
import styles from "../components/styles/Trayectoria.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Trayectoria = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
	return (
		<div className={styles.section}>
			<div className={`${styles.container} ${styles.item}`} data-aos="fade-up">
				<h2 className={` ${styles.encabezado} `}>Trayectoria</h2>
				<p className={styles.p}>
					<strong>NormasSalud </strong> fue creada en el año 2015 y lanzada al
					publico en el 2016, cuenta con valiosas herramientas que ayudan a los
					funcionarios e instituciones a minimizar errores y facilita los
					procesos administrativos, desde su lanzamiento ha tenido una excelente
					aceptación ya cuenta con varios miles de suscriptores, y en las redes
					sociales como Linkedin ya cuenta con más de 13.000 seguidores de
					diferentes perfiles como Médicos, Gerentes de Clínicas y hospitales,
					enfermeras, personal de áreas administrativas entre otros.
					<strong> NormasSalud.com</strong> es un proyecto real y de trayectoria
					en el Sector Salud. 👉
				</p>
			</div>

			<section
				className={`${styles.container} ${styles.gridAlign}`}
				data-aos="fade-up"
			>
				<img
					src={imagenes.img1}
					alt=""
					className={`${styles.imgContainer} ${styles.imgForma1}`}
				/>
				<img src={imagenes.img2} alt="" className={`${styles.imgContainer} `} />
				<img
					src={imagenes.img3}
					alt=""
					className={`${styles.imgContainer} ${styles.imgForma3}`}
				/>
			</section>
		</div>
	);
};

export default Trayectoria;
