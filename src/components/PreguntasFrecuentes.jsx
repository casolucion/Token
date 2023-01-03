import React, { useEffect } from "react";
import styles from "../components/styles/PreguntasFrecuentes.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PreguntasFrecuentes = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div>
			<h2 className={styles.h2}>Preguntas Frecuentes</h2>

			<section className={styles.titulo} data-aos="fade-right">
				<details>
					<summary className={styles.summary}>
						¿De qué se trata este proyecto?
					</summary>
					<p className={styles.p}>
						NormasSalud.com es una plataforma , enfocada en generar herramientas
						digitales que ayudan a reducir las perdidas de dinero en el sector
						salud y permite a los funcionarios agilizar procesos, ayudando a
						miles de personas en estos más de 6 años al publico. En esta nueva
						etapa el objetivo desde NormasSalud es lograr conectar el sector
						salud con las tecnologías blockchain, por medio de contenidos, el
						juego Play to Earn y las herramientas que ayuden a las personas a
						obtener beneficios, también se creará el programa para ayudar a
						niños de bajos recursos que padecen cáncer, para todo esto también
						hemos creado el Token NORS. Te invito a que veas toda la información
						en el White Paper AQUÍ
					</p>
				</details>

				<details>
					<summary className={styles.summary}>
						¿El token NORS tiene un uso real?
					</summary>
					<p className={styles.p}>
						Te cuento que sí, NORS es un utility token que permitirá pagar con
						el token los servicios, uso de herramientas y cursos de NormasSalud,
						y algo muy importante es que con el token tambien se realizará el
						apoyo al programa de ayuda a Niños con cáncer. . Te invito a que
						veas toda la información en el White Paper AQUÍ
					</p>
				</details>

				<details>
					<summary className={styles.summary}>
						¿El equipo tiene experiencia?
					</summary>
					<p className={styles.p}>
						Sí, como puedes ver la sección del TEAM hemos trabajado en se sector
						salud desde hace muchos años ejerciendo diferentes cargos
						asistenciales y administrativos en Clínicas hospitales, lo que nos
						ha permitido generar todas estas herramientas que ayudan día a día
						al sector Salud. En blockchain y criptomonedas tenemos la
						experiencia desde el año 2017 como inversores y analistas de estas
						tecnologías, para lo cual hemos estudiado y aprendido muchísimo
						buscando aportar y generar estrategias para el uso de Blockchain por
						ejemplo en la interoperabilidad de la Historia clínica entre otros
						casos de uso. Como nuestra meta es lograr acercar al sector salud a
						Blockchain y ser los grandes referentes del sector, estamos
						constantemente buscando y logrando las mejores alianzas con grandes
						expertos en Blockchain para cumplir este objetivo.
					</p>
				</details>

				<details>
					<summary className={styles.summary}>
						¿Quién puede asegurar que es un proyecto real?
					</summary>
					<p className={styles.p}>
						Esta pregunta es muy importante porque en el mundo de las
						criptomonedas existen muchas estafas, por eso desde NormasSalud
						queremos brindar a nuestros usuarios e inversores siempre total
						seguridad de que somos una plataforma y equipo real, y para esto la
						misma comunidad puede certificar que hemos brindado grandes
						herramientas y cursos prácticos desde el año 2016, también hemos
						presentado la plataforma en congresos de salud como el que es creado
						anualmente por la empresa R&A Smart Health en Bogotá Colombia y todo
						esto está evidenciado en las publicaciones de nuestras redes
						sociales como la de Linkedin que encuentras en la parte inferior de
						esta pagina web.
					</p>
				</details>

				<details>
					<summary className={styles.summary}>
						¿Cómo puedo Comprar el token NORS?
					</summary>
					<p className={styles.p}>
						Cómo sabemos que no todas las personas tienen experiencia en comprar
						tokens usando los Exchanges, te vamos a mostrar todo el paso a paso
						en nuestro canal de YouTube para que tu puedas conocer como comprar
						fácilmente el token y minimices los riesgos de estafas o
						suplantaciones, porque debes tener muy claro que algunos
						inescrupulosos se aprovechan de las personas para robarle sus fondos
						y por eso nosotros te vamos a ayudar en todo el proceso de
						aprendizaje de compra. Puedes ver los videos de como comprar AQUÍ
					</p>
				</details>
			</section>
		</div>
	);
};

export default PreguntasFrecuentes;
