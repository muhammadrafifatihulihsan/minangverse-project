// component
import StripBatik from "./StripBatik";
import "./styling/Hero.css";
const Hero = () => {
	return (
		<>
			<div>
				<StripBatik />
				<div className="hero-section bg-[#F5F5F5] text-[#a00b0b] drop-shadow-[2px_2px_3px_#ffffff]">
					<div className="flex flex-col pb-40 pt-30 text-center mx-8 opacity-100">
						<div className="px-4 py-2 items-center text-center">
							<h3 className="btn btn-dash text-3xl underline decoration-amber-900 font-medium text-[#971616] rounded-2xl">
								Minangverse
							</h3>
						</div>
						<h1 className="text-6xl font-bold mb-5 mx-20">
							Hidupkan Kembali Warisan Minangkabau dalam Genggamanmu. Mainkan
							musiknya, Buka kisahnya, Rasakan budayanya.
						</h1>
						<p className="text-2xl mx-15 text-[#570808]">
							“Adat basandi syarak, syarak basandi Kitabullah”, Kami percaya
							bahwa budaya adalah identitas yang harus dirawat dengan cara yang
							dekat dengan generasi hari ini. Itulah mengapa Minangverse hadir
							menggabungkan nilai adat, teknologi, dan edukasi dalam satu ruang.
						</p>
						<div className="px-4 py-2">
							<button className="btn bg-[#890808] text-[#f5f5f5] rounded-3xl mt-1 text-2xm">
								Jelajahi Budaya
							</button>
						</div>
					</div>
				</div>
				<StripBatik />
			</div>
		</>
	);
};

export default Hero;
