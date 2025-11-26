// component
import Subsection1 from "../../components/Internal/Subsection1";
import Hero from "../../components/Internal/Hero";
import Navbar from "../../components/Internal/Navbar";
import Section1 from "../../components/Internal/Section1";
import Section2 from "../../components/Internal/Section2";
import StripBatik from "../../components/Internal/StripBatik";
import Section3 from "../../components/Internal/Section3";
import SectionFooter from "../../components/Internal/SectionFooter";
import Footer from "../../components/Internal/Footer";

const LandingPage = () => {
	return (
		<>
			<div>
				{/* <Navbar /> */}
				<nav className="sticky top-0 z-50 ">
					<Navbar />
				</nav>
				<div>
					<Hero />
					<Section1 />
					<Subsection1 />
					<Section2 />
					<StripBatik />
					<Section3 />
					<SectionFooter />
					<Footer />
					<StripBatik />
				</div>
			</div>
		</>
	);
};

export default LandingPage;
