import React, { useEffect } from "react";
import imagen from "../assets/image/apoyo-ninos-con-cancer.png";
import styles from "../components/styles/ProgramaAyuda.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProgramaAyuda = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div>
			<h2 className={`${styles.h2} ${styles.container} `}>
				Programa de apoyo a niños con Cáncer.
			</h2>

			<section className={styles.container}>
				<section data-aos="fade-up">
					<img src={imagen} alt="" className={styles.img} />
				</section>
				<section>
					<p className={styles.p}>
						En todos estos años de experiencia en el sector hemos encontrado
						múltiples casos de niños con Cancer y son de familias de bajos
						recursos y que afrontan grandes problemáticas, como demoras en la
						realización de consultas, de pruebas diagnósticas, entre otros,
						debido a trámites administrativos. Esto dilata el inicio del
						tratamiento oportuno del cáncer en estos niños, las consultas
						especializadas o exámenes particulares son costosos y una familia
						sin recursos no va a poder pagar estos servicios de manera
						particular, lo que los obliga a esperar hasta que se generen las
						autorizaciones por parte del asegurador y la disponibilidad del
						prestador , por eso en NormasSalud contamos con toda la
						determinación para ayudar a estos niños y lo haremos destinando un
						porcentaje del token y de los Fees a esta linda causa, con tu apoyo
						ayudaremos a generar cambios en la vida de muchas familias que
						realmente lo necesitan. Te Invitamos a que veas la información
						completa en el siguiente 👉 White Paper
					</p>
				</section>
			</section>
		</div>
	);
};

export default ProgramaAyuda;
