import React from "react";
import styles from "./components/styles/App.modules.css";
import Home from "./components/Home";
import WhitePaper from "./components/WhitePaper";
import TokenEnglish from "./English/English";
import { HashRouter, Route, Routes } from "react-router-dom";
import WhitePaperEn from "./pages/WhitePaperEn";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout/Layout";

const App = () => {
	return (
		<div className={styles.container}>
			<HashRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="TokenEnglish" element={<TokenEnglish />} />
						<Route path="WhitePaper" element={<WhitePaper />} />
						<Route path="WhitePaperEn" element={<WhitePaperEn />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Layout>
			</HashRouter>
		</div>
	);
};

export default App;
