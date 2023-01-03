import React from "react";
import styles from "../components/styles/TokenNors.module.css";
import imagen from "../assets/image/token-nors.png";
import logo from "../assets/image/BscScan-logo.png";

const TokenNors = () => {
	return (
		<div>
			<h2 className={`${styles.h2} ${styles.container} `}>¿Token NORS?</h2>
			<section className={styles.container}>
				<section>
					<p className={styles.p}>
						En este caso hablamos de Token digital (Utility Token), los tokens
						de NormasSalud son desarrollados sobre la Blockchain de Binance
						buscando que tengas rapidez y bajos fees en tus transacciones. Los
						tokens funcionan como medio de intercambio dentro de diferentes
						plataformas para que los puedas usar en los servicios y herramientas
						de NormasSalud.com,. NORS es un Utility Token creado en la Binance
						Smart Chain, y se emitió con la finalidad de permitir que las
						personas puedan intercambiar los Tokens por contenidos y
						herramientas digitales enfocadas al sector salud y también permitirá
						ayudar a niños con Cancer entre otros usos. Nuestra meta es conectar
						al sector salud con Blockchain y Cryptos y aportar contenidos para
						fomentar la adopción de Blockchain. Te Invitamos a que veas la
						información completa en el siguiente 👉 White Paper
					</p>
				</section>

				<section data-aos="fade-up">
					<img src={imagen} alt="" className={styles.img} />
				</section>
			</section>
			<img src={logo} alt="" className={styles.logo} />

			<p className={styles.contrato}>
				<strong>
					Número de Contrato Binance Smart Chain: <br />
					✔0x560F26Eab77CF61b3AF291DA93dd740e68f5AEc1
				</strong>
			</p>
		</div>
	);
};

export default TokenNors;
