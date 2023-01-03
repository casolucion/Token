import React from "react";
import styles from "./components/styles/App.modules.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import WhitePaper from "./pages/WhitePaper";
import TokenEnglish from "./English/English";
import { HashRouter, Route, Routes } from "react-router-dom";
import WhitePaperEn from "./pages/WhitePaperEn";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
	return (
		<div className={styles.container}>
			<HashRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/TokenEnglish" element={<TokenEnglish />} />
					<Route path="/WhitePaper" element={<WhitePaper />} />
					<Route path="WhitePaperEn" element={<WhitePaperEn />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;
