// component
import Subsection1 from "../../components/Internal/Subsection1";
import Hero from "../../components/Internal/Hero";
import Navbar from "../../components/Internal/Navbar";
import Section1 from "../../components/Internal/Section1";
import Section2 from "../../components/Internal/Section2";

const LandingPage = () => {
	return (
		<>
			{/* <Navbar /> */}
			<div>
				<Hero />
				<Section1 />
				<Subsection1 />
				<Section2 />
			</div>
		</>
	);
};

export default LandingPage;
