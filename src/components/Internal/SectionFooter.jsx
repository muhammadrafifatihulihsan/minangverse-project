import character from "../../assets/character.jpg";
// style
import "../Internal/styling/Section.css";

const SectionFooter = () => {
	return (
		<>
			<div className="sectionfooter">
				<div className="hero min-h-screen flex items-center justify-center">
					<div className="hero-content flex-col lg:flex-row items-center justify-center text-center">
						<div className="text-[#600b0b]">
							<h1 className="text-5xl font-bold">Ayo Basamo!</h1>
							<p className="py-6 text-[#460707] text-2xl">
								Punya ide bagus, kolaborasi budaya, patnership atau hal lainnya?
								Siko kamari sambil minum teh talua bersama kita bangkitkan
								budaya Minangkabau!
							</p>
							<button className="btn btn-default outline-0 shadow-2xl">
								Hubungi
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SectionFooter;
