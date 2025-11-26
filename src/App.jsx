import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/pallateColor.css";
// Pages
import Musik from "./Pages/Musik/Musik";
import Introduction from "./Pages/Introduction/Introduction";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/NotFound";
import Kamus from "./Pages/Kamus/Kamus";
import KartuKeberuntungan from "./Pages/KartuKeberuntungan/KartuKeberuntungan";
import LiveChat from "./Pages/LiveChat/LiveChat";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* main pages */}
					<Route path="/" element={<LandingPage />} />
					<Route path="/main" element={<LandingPage />} />
					<Route path="/index" element={<LandingPage />} />
					{/* music pages */}
					<Route path="/alat" element={<Musik />} />
					{/* sejarah */}
					<Route path="/introduction" element={<Introduction />} />
					{/* kamus */}
					<Route path="/kamus" element={<Kamus />} />
					{/* Kartu Keberuntungan */}
					<Route path="/kartu" element={<KartuKeberuntungan />} />
					{/* live chat */}
					<Route path="/chat" element={<LiveChat />} />
					{/* notfound */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
