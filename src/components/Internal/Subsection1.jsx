import BlurText from "../BlurText";
import "./styling/Section.css";

const Subsection1 = () => {
	const handleAnimationComplete = () => {
		console.log("Animasi selesai");
	};

	return (
		<>
			<div className="subsection1 flex py-6 justify-center items-center text-center">
				<div className="flex mx-30 items-center text-center content-center text-[#600b0b] font-semibold italic">
					<BlurText
						text="“Bangsa yang besar adalah bangsa yang tidak meninggalkan sejarah dan budayanya.” — Ir. Soekarno"
						delay={150}
						animateBy="words"
						direction="bottom"
						onAnimationComplete={handleAnimationComplete}
						className="text-xl text-center items-center justify-center"
					/>
				</div>
			</div>
		</>
	);
};

export default Subsection1;
