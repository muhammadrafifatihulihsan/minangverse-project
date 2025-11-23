import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// Pages
import Musik from "./Pages/Musik/Musik";
import Sejarah from "./Pages/Sejarah/Sejarah";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/NotFound";

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
					<Route path="/musik" element={<Musik />} />
					{/* sejarah */}
					<Route path="/sejarah" element={<Sejarah />} />
					{/* notfound */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
