import React from "react";
// import tokenomics from "../assets/image/Tokenomics-es.png";

// <img src={tokenomics} alt="" className={styles.imgContainer} />

//* ***
// Importando componentes

import Header from "./Header";
import Card from "./Problemas";
import Trayectoria from "./Trayectoria";
import Herramientas from "./Herramientas";
import NuevosDesarrollos from "./NuevosDesarrollos";
import ProgramaAyuda from "./ProgramaAyuda";
import TokenNors from "./TokenNors";
import Team from "./Team";
import PreguntasFrecuentes from "./PreguntasFrecuentes";
import Preventa from "./Preventa";
import PiePagina from "./PiePagina";

const Home = () => {
	return (
		<div>
			<Header />
			<Card />
			<Trayectoria />
			<Herramientas />
			<NuevosDesarrollos />
			<ProgramaAyuda />
			<TokenNors />
			<Team />
			<PreguntasFrecuentes />
			<Preventa />
			<PiePagina />
		</div>
	);
};

export default Home;
