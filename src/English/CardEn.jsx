/* eslint-disable indent */
import React from "react";
import CardImg from "../assets/image/perdida-de-dinero.jpg";
import CardImg1 from "../assets/image/estudiante-normassalud.jpg";
import styles from "../components/styles/Card.module.css";

const Card = function (props) {
	const imagen1 = CardImg;
	const imagen2 = CardImg1;

	return (
		<section>
			<h1 id="problema">¿What Problems does it solve?</h1>
			<p>
				<strong> NormasSalud.com</strong> It is a real project with a long
				history.
			</p>
			<div className={styles.cards}>
				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen1} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Loss of Money</h3>
						<p className={styles.p}>
							NormsSalud solves the great problem of loss of money for health
							service providers due to factors such as poor billing that
							generate glosses and return of accounts due to errors in the RIPS
							and FIRIPS. All this is bleeding the health system and directly
							affects the provision of services to patients because it forces
							coverage to be minimized.
						</p>
					</div>
				</div>

				<div className={`${styles.card} ${styles.card1}`}>
					<div className={styles.container}>
						<img src={imagen2} alt="" className={styles.img} />
					</div>
					<div className={styles.details}>
						<h3 className={styles.h3}>Educational content</h3>
						<p className={styles.p}>
							Another problem that it solves is the lack of educational content
							for personnel working in the sector in terms of practical issues
							that are experienced in the day-to-day life of an institution.
							Content that no one teaches and that forces officials to carry out
							their work from their own initiative and knowledge. This in many
							cases results in errors that cost the institution a lot and affect
							patients. That is why in NormsSalud we provide content such as the
							RIPS course, this course allows them to reduce money losses and
							improve processes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Card;
