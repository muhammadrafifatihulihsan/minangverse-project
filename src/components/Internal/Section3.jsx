import { Link } from "react-router-dom";
import alatmusik from "../../assets/alatmusik.png";
import senjata from "../../assets/senjata.png";
import rumahgadang from "../../assets/rumahgadang.png";
import kamusbahasa from "../../assets/buku.png";
import kartubudaya from "../../assets/kartubudayaa.png";
import rakyatmain from "../../assets/rakyatmain.jpg";

const Section3 = () => {
	const cards = [
		{
			img: rumahgadang,
			title: "Landing Page",
			desc: "Sambutan hangat ke dalam dunia Minangverse! Halaman utama yang intuitif dan modern ini memberikan gambaran lengkap tentang semua fitur yang bisa Anda jelajahi. Mulai petualangan budaya Anda dari sini dengan mudah.",
			link: "/#",
		},
		{
			img: senjata,
			title: "Budaya Minangkabau",
			desc: "Ingin memahami dasar-dasar budaya Minang? Bagian ini adalah panduan komprehensif Anda. Dari filosofi 'Adat Basandi Syarak, Syarak Basandi Kitabullah' hingga tradisi unik, semua informasi disusun secara ringkas dan mudah dicerna.",
			link: "/introduction",
		},
		{
			img: alatmusik,
			title: "Alat Musik Virtual",
			desc: "Jangan hanya baca, rasakan langsung bunyi magis alat musik tradisional! Tidak perlu tunggu liburan untuk mencoba, Pilih alat musik seperti Talempong atau Saluang, pelajari sejarah singkatnya, dan mainkan melodi Anda sendiri.",
			link: "/alat",
		},
		{
			img: kamusbahasa,
			title: "Kamus Bahasa Minang Interaktif",
			desc: "Kuasai bahasa Minangkabau dengan mudah! Cari kosakata, temukan arti, contoh kalimat, dan dengarkan cara pengucapannya.",
			link: "/kamus",
		},
		{
			img: kartubudaya,
			title: "Petualangan Kartu Keberuntungan",
			desc: "Belajar sambil bermain! Klik kartu secara acak untuk membuka funfact menarik tentang budaya Minang. Siapa yang akan Anda temukan?",
			link: "/kartu",
		},
		{
			img: rakyatmain,
			title: "Ruang Obrolan Langsung (Live Chat)",
			desc: "Berdiskusi dan berbagi pengalaman seputar budaya Minangkabau secara real-time dengan komunitas global, Temukan teman sefrekuensimu!",
			link: "/chat",
		},
	];

	return (
		<div className="main-container py-10">
			<div className="text-4xl text-center font-bold text-[#570808] underline underline-offset-4 mb-10">
				Fitur Unggulan
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-[1200px] mx-auto">
				{cards.map((card, index) => (
					<Link to={card.link} key={index} className="w-72 h-[460px]">
						<div className="card bg-base-100 w-full h-full shadow-md outline-2 outline-amber-950 flex flex-col cursor-pointer hover:shadow-lg transition">
							<figure className="h-[180px] w-full overflow-hidden">
								<img
									src={card.img}
									alt={card.title}
									className="w-full h-full object-cover"
								/>
							</figure>
							<div className="card-body flex flex-col justify-between grow">
								<h2 className="card-title text-lg font-semibold">
									{card.title}
								</h2>
								<p className="text-sm mt-2 grow">{card.desc}</p>
								<div className="card-actions justify-end mt-2">
									<button className="btn btn-soft btn-sm">Jelajahi</button>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Section3;
