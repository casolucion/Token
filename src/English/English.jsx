import React from "react";
import styles from "../components/styles/App.modules.css";
import tokenomics from "./Image/Tokenomics-en.png";
import preventa from "./Image/Presale-Token.jpg";

//* ***
// Importando componentes

import Header from "./HeaderEn";
import Card from "./CardEn";
import Trayectoria from "./TrayectoriaEn";
import Herramientas from "./HerramientasEn";
import NuevosDesarrollos from "./NuevosDesarrollosEn";
import ProgramaAyuda from "./ProgramaAyudaEn";
import TokenNors from "./TokenNorsEn";
import Team from "./TeamEn";
import PreguntasFrecuentes from "./PreguntasFrecuentesEn";

const Home = () => {
	return (
		<div className={styles.container}>
			<header>
				<picture>
					<Header />
				</picture>
			</header>
			<Card />

			<Trayectoria />
			<Herramientas />
			<NuevosDesarrollos />
			<ProgramaAyuda />
			<TokenNors />
			<Team />
			<img src={tokenomics} alt="" />
			<PreguntasFrecuentes />
			<h1>Preventa</h1>
			<p>
				🔴Be attentive and don`t miss this great opportunity. We will let you
				know you how to invest in NormasSalud token soon.
			</p>

			<img src={preventa} alt="" />
			<h2>Pie de Pagina</h2>
		</div>
	);
};

export default Home;
