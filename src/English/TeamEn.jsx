import React from "react";
import CardImg from "../assets/image/perdida-de-dinero.jpg";
import CardImg1 from "../assets/image/estudiante-normassalud.jpg";
import styles from "../components/styles/Card.module.css";

const Team = function (props) {
	const imagen1 = CardImg;
	const imagen2 = CardImg1;
	return (
		<div className={styles.cards}>
			<div className={`${styles.card} ${styles.card1}`}>
				<div className={styles.container}>
					<img src={imagen1} alt="" className={styles.img} />
				</div>
				<div className={styles.details}>
					<h3 className={styles.h3}>Perdidas de Dinero</h3>
					<p className={styles.p}>
						NormasSalud resuelve el gran problema de pérdidas de dinero de los
						prestadores de servicios de salud por factores como mala facturación
						que generan glosas y devolución de cuentas por errores en los RIPS y
						FIRIPS. Todo esto está desangrando al sistema de salud y afecta
						directamente la prestación de servicios a los pacientes porque
						obliga a minimizar la cobertura.
					</p>
				</div>
			</div>

			<div className={`${styles.card} ${styles.card1}`}>
				<div className={styles.container}>
					<img src={imagen2} alt="" className={styles.img} />
				</div>
				<div className={styles.details}>
					<h3 className={styles.h3}>Parrafo 2</h3>
					<p className={styles.p}>
						NormasSalud resuelve el gran problema de pérdidas de dinero de los
						prestadores de servicios de salud por factores como mala facturación
						que generan glosas y devolución de cuentas por errores en los RIPS y
						FIRIPS. Todo esto está desangrando al sistema de salud y afecta
						directamente la prestación de servicios a los pacientes porque
						obliga a minimizar la cobertura.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Team;
