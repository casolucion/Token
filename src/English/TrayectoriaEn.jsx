import React from "react";
import imagenes from "../assets/image/trayectoria/imgsTrayectoria";
import styles from "../components/styles/Trayectoria.module.css";

const Trayectoria = () => {
	return (
		<div>
			<h1>Trajectory!! </h1>
			<p>
				<strong>NormasSalud </strong> was created in 2015 by Carlos Léon and
				launched in 2016, since its launch it has had an excellent acceptance
				and already has several thousand subscribers, in social networks such as
				Linkedin it already has more than 13,000 followers of different profiles
				such as doctors, managers of clinics and hospitals, nurses and personnel
				from administrative areas, among others..The platform has been presented
				at conferences and other scenarios to generate brand recognition,
				seeking that more people benefit from the tools that the platform
				contains, see some images that certify it below.👇👇
			</p>
			<div>
				<img src={imagenes.img1} alt="" className={styles.img} />
				<img src={imagenes.img2} alt="" className={styles.img} />
				<img src={imagenes.img3} alt="" className={styles.img} />
			</div>
		</div>
	);
};

export default Trayectoria;
