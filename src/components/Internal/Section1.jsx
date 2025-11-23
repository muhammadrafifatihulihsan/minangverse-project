// component external
import Masonry from "../Masonry";
// asset
import alatmusik from "../../assets/alatmusik.png";
import rakyat from "../../assets/rakyatmain.jpg";
import buku from "../../assets/buku.png";
import senjata from "../../assets/senjata.png";
import character from "../../assets/character.jpg";
// styling
import "./styling/Section.css";

const Section1 = () => {
	const items = [
		{
			id: "1",
			img: character,
			url: "#",
			size: 600,
		},
		{
			id: "2",
			img: rakyat,
			url: "#",
			size: 500,
		},
		{
			id: "3",
			img: senjata,
			url: "#",
			size: 600,
		},
		{
			id: "4",
			img: alatmusik,
			url: "#",
			size: 500,
		},
		{
			id: "5",
			img: buku,
			url: "#",
			size: 600,
		},
	];

	return (
		<>
			<div className="section1 bg-[#600b0b]">
				<div className="section1 flex flex-col md:flex-row items-start gap-5 bg-[#600b0b] text-[#f5f5f5] py-40 px-8 ml-25 mr-30">
					{/* Kolom Deskripsi */}
					<div className="md:w-2/5 flex flex-col justify-center">
						<h1 className="text-5xl font-extrabold tracking-widest mb-2 bg-linear-to-r from-[#ffe957] via-[#f9b153] to-[#f9855b] bg-clip-text text-transparent pb-2">
							Minangverse?
						</h1>
						<p className="text-xl">
							Minangverse merupakan sebuah wadah interaktif untuk mempelajari
							budaya Minangkabau. Pengguna dapat memainkan alat musik
							tradisional, mengikuti kuis kartu keberuntungan budaya,
							menjelajahi arsip dan timeline sejarah, hingga belajar melalui
							pengalaman digital yang menarik dan mudah diakses dari mana saja.
						</p>
					</div>

					{/* Kolom Masonry */}
					<div className="md:w-3/5 grayscale-70">
						<Masonry
							items={items.map((item) => ({
								...item,
								width: item.size,
								height: item.size, // persegi
							}))}
							ease="power3.out"
							duration={0.6}
							stagger={0.05}
							animateFrom="bottom"
							scaleOnHover={true}
							hoverScale={0.95}
							blurToFocus={true}
							colorShiftOnHover={false}
							columns={2} // bisa diatur sesuai jumlah foto
							gap={16} // jarak antar tile
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section1;
