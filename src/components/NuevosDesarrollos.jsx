import React, { useEffect } from "react";
import imagen from "../assets/image/nuevosDesarrollos/imgsNDesarrollos";
import styles from "../components/styles/NuevosDesarrollos.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NuevosDesarrollos = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div>
			<h2 className={`${styles.h2} ${styles.container} `}>
				Nuevos Desarrollos
			</h2>
			<section className={` ${styles.section}  ${styles.container} `}>
				<section data-aos="fade-up-right">
					<img src={imagen.img1} alt="" className={styles.img} />
				</section>
				<section>
					<h3 className={` ${styles.encabezado} `}>💻 Herramientas</h3>
					<p className={styles.p}>
						Se agregarán a la plataforma nuevas herramientas cómo el software de
						Historia Clínica, seguridad del paciente, y módulos de diferentes
						informes, para facilitar los procesos de los prestadores de
						servicios de salud.
					</p>
				</section>
			</section>

			<section className={` ${styles.section}  ${styles.container} `}>
				<section>
					<h3 className={` ${styles.encabezado} `}>🎮Juego Play To Earn.</h3>
					<p className={styles.p}>
						Estamos muy emocionados de contarte que Vas a tener acceso al primer
						juego Play To Earn en salud y usando tecnología Blockchain, donde
						vas a lograr combatir y obtener ganancias en tokens. Los Tokens los
						podrás intercambiar por personajes y artículos o pasarlos, ¿quieres
						tener las ganancias en tu banco? es muy fácil puedes pasar tus
						tokens a otra criptomoneda por ejemplo BNB, transferirlos a un
						exchange como Binance y ahí los vendes para tener el dinero en tu
						cuenta bancaria, también te recuerdo que los personajes y artículos
						en la industria de los video juegos Blockchain se pueden incrementar
						mucho de precio y darte grandes ganancias. Esté será un juego muy
						emocionante donde vas a poder combatir, aprender y generar miles de
						dólares en ganancias.
					</p>
				</section>
				<section data-aos="fade-up-left">
					<img
						src={imagen.img2}
						alt=""
						className={` ${styles.imgJuego} ${styles.img} `}
					/>
				</section>
			</section>
		</div>
	);
};

export default NuevosDesarrollos;
