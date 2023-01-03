/* eslint-disable indent */
import React, { useEffect } from "react";
import CardImg from "../assets/image/perdida-de-dinero.jpg";
import CardImg1 from "../assets/image/estudiante-normassalud.jpg";
import styles from "./styles/Card.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = function (props) {
	const imagen1 = CardImg;
	const imagen2 = CardImg1;
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div data-aos="fade-left">
			<section className={styles.container1}>
				<h1 id="problema" className={styles.h1}>
					¿Qué Problemas Resuelve NormasSalud?
				</h1>
			</section>
			<div className={styles.cards}>
				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen1} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Perdidas de Dinero</h3>
						<p className={styles.p}>
							NormasSalud resuelve el gran problema de pérdidas de dinero de los
							prestadores de servicios de salud por factores como mala
							facturación que generan glosas y devolución de cuentas por errores
							en los RIPS y FIRIPS. Todo esto está desangrando al sistema de
							salud y afecta directamente la prestación de servicios a los
							pacientes porque obliga a minimizar la cobertura.
						</p>
					</div>
				</div>

				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen2} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Cursos Prácticos</h3>
						<p className={styles.p}>
							Otro problema que resuelve es la falta de contenido educativo para
							el personal que trabaja en el sector en cuanto a temas prácticos
							que se viven en el día a día de una institución pero que nadie
							enseña y los funcionarios lo hacen con su propia iniciativa y
							conocimiento pero esto en muchos casos termina en errores que le
							cuestan a la institución y afecta a los pacientes, por eso desde
							NormasSalud brindamos contenidos como el curso de RIPS, este curso
							les permite disminuir las perdidas de dinero y a mejorar los
							procesos.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
