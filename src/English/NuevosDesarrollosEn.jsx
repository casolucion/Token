import React from "react";
import imagen from "../assets/image/nuevosDesarrollos/imgsNDesarrollos";

const NuevosDesarrollos = () => {
	return (
		<div>
			<h1>NEW DEVELOPMENTS</h1>
			<p>
				💻 Tools New tools such as Clinical History software, patient safety,
				and different report modules will be added to the platform to facilitate
				the processes of health service providers.
			</p>
			<img src={imagen.img1} alt="" />
			<p>
				🎮 Play to Earn Game We are very excited to tell you that you are going
				to have access to the first Play To Earn game in health, using
				Blockchain technology. In this game you will be able to fight different
				battles and obtain profits in tokens. The Tokens can be exchanged for
				characters and items or being transfered. Do you want to have your
				profits in your bank account? It is very easy, you can pass your tokens
				to another cryptocurrency for example BNB, transfer them to an exchange
				like Binance and there you can sell them and have the money in your bank
				account. Don`t forget that characters and articles in the Blockchain
				video game industry can increase a lot in price and give you big
				profits. This will be a very exciting game where you will be able to
				fight, learn and generate thousands of dollars in profits.
			</p>
			<img src={imagen.img2} alt="" />
		</div>
	);
};

export default NuevosDesarrollos;
