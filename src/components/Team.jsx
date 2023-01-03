import React, { useEffect } from "react";
import Carlos from "../assets/image/carlos-NORMASSALUD-1.jpg";
import Dennis from "../assets/image/dennis.jpg";
import JairoR from "../assets/image/jairo-rodriguez-normassalud-1.png";
import JairoP from "../assets/image/jairo-pizarro-normassalud-2.jpg";
import Mafe from "../assets/image/mafe-coufunder-normassalud.jpg";
import Kathe from "../assets/image/katherine-normassalud.jpg";
import styles from "../components/styles/Team.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = function (props) {
	const imagen1 = Carlos;
	const imagen2 = Dennis;
	const imagen3 = JairoR;
	const imagen4 = JairoP;
	const imagen5 = Mafe;
	const imagen6 = Kathe;

	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div>
			<h2 className={`${styles.h2} ${styles.titulo} `}>TEAM</h2>
			<section className={styles.cards} data-aos="fade-up-right">
				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen1} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Carlos Leon</h3>
						<p className={styles.p}>
							Blockchain Developer, emprendedor con determinación, +10 años en
							el sector salud, especialista en RIPS(Facturación, Cuentas
							Medicas, desarrollo de software para el sector salud....)
							ChatMarketing Expert, Participación en criptos desde el año 2017,
						</p>
					</div>
				</div>

				<div className={`${styles.card} ${styles.card2}`}>
					<div className={styles.container}>
						<img src={imagen2} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Dennis Prieto</h3>
						<p className={styles.p}>
							Médico, Universidad del Quindío. Magister en Bioética. Asesor
							permanente del Comité de Ética y Bioética de la investigación
							Universidad del Quindío. Docente Área de Bioética. Especialista en
							gerencia de sistemas de salud. Auditor médico, con más de 15 años
							de experiencia en el sector público y privado.
						</p>
					</div>
				</div>
				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen3} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Jairo Rodriguez</h3>
						<p className={styles.p}>
							Administrador de Empresas de la Universidad Nacional de Colombia;
							con vocación por emprender; con experiencia laboral en las áreas
							financiera, administrativa, comercial, auditoria, administración
							de personal, y en el sector salud durante 7 años como: Subgerente
							de IPS y asesor de control interno. Participación en el mundo
							Cripto desde 2019
						</p>
					</div>
				</div>
				<div className={`${styles.card} ${styles.card2}`}>
					<div className={styles.container}>
						<img src={imagen4} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Jairo Pizarro</h3>
						<p className={styles.p}>
							Experto en educación Online. 14 años de experiencia como docente
							bilingüe. Magister en Administración de la Tecnología Educativa,
							Cripto Inversor desde 2017.
						</p>
					</div>
				</div>
				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen5} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Maria Fernanda Hernandez</h3>
						<p className={styles.p}>
							Enfermera, Administradora en salud, + de 16 años en el sector
							salud (Promoción y prevención, Salud Pública, Riesgo
							cardiovascular, referencia y contra referencia), aportando para el
							mejoramiento en la salud de los pacientes.
						</p>
					</div>
				</div>
				<div className={`${styles.card} ${styles.card2}`}>
					<div className={styles.container}>
						<img
							src={imagen6}
							alt=""
							className={`${styles.img} ${styles.cover}`}
						/>
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Katherine Castro</h3>
						<p className={styles.p}>
							Profesional en administración de empresas con más de 10 años de
							experiencia, formación en gerencia del talento humano y amplia
							trayectoria en empresas de la salud y sector público, con énfasis
							en las áreas de planeación, cartera, contratación, auditoría y
							asesoría en gestión de iniciativas de negocio.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Team;
