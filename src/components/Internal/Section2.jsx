import rumahgadang from "../../assets/rumahgadang.png";
import senjata from "../../assets/senjata.png";
import rakyatmain from "../../assets/section2.jpg";

const Section2 = () => {
	return (
		<>
			<div className="flex bgsection2 items-center justify-center">
				<div className="container content-between lg:mx-40 md:10">
					<div className="judul text-center text-4xl mt-0 mb-10 font-bold">
						<h1 className="text-[#a00b0b] underline decoration-4 decoration-[#e7c54c] mt-10">
							Mengapa Minangverse
						</h1>
					</div>
					<div className="utama flex items-center justify-between">
						{/* card 1 */}
						<div className="card1">
							<div className="card bg-base-100 image-full w-96 shadow-sm">
								<figure>
									<img src={rumahgadang} alt="rumah" />
								</figure>
								<div className="card-body">
									<div className="card-actions justify-start">
										<div className="btn bg-[#fef3d2] shadow-none outline-none">
											1
										</div>
									</div>
									<h2 className="card-title text-2xl text-[#ffe957]">
										Indeks Pembangunan Kebudayaan
									</h2>
									<p className="text-2xm">
										Survei Indeks Pembangunan Kebudayaan 2023 menunjukkan bahwa
										pemanfaatan media dan teknologi untuk budaya masih rendah,
										dengan Sumatera Barat berada di bawah angka 60 poin,
										memperlihatkan adanya kesenjangan antara teknologi digital
										dan praktik pelestarian budaya.
									</p>
								</div>
							</div>
						</div>
						{/* card 2 */}
						<div className="card2">
							<div className="card bg-base-100 image-full w-96 shadow-sm">
								<figure>
									<img src={senjata} alt="monoton" />
								</figure>
								<div className="card-body">
									<div className="card-actions justify-start">
										<div className="btn bg-[#fef3d2] shadow-none outline-none">
											2
										</div>
									</div>
									<h2 className="card-title text-2xl text-[#ffe957]">
										Akses Pengetahuan Kebudayaan
									</h2>
									<p className="text-2xm ">
										Banyak informasi budaya Minangkabau tersebar di berbagai
										sumber yang tidak terverifikasi dan sulit dipahami generasi
										muda, menyebabkan pemahaman budaya menjadi tidak merata dan
										sering kali hanya dinikmati oleh orang-orang yang memiliki
										akses langsung ke sumber-sumber tertentu.
									</p>
								</div>
							</div>
						</div>
						{/* card 3 */}
						<div className="card3">
							<div className="card bg-base-100 image-full w-96 shadow-sm">
								<figure>
									<img src={rakyatmain} alt="monoton" />
								</figure>
								<div className="card-body">
									<div className="card-actions justify-start">
										<div className="btn bg-[#fef3d2] shadow-none outline-none">
											3
										</div>
									</div>
									<h2 className="card-title text-2xl text-[#ffe957]">
										Minimnya Media Belajar Interaktif
									</h2>
									<p className="text-2xm ">
										Generasi muda tumbuh dengan game, animasi, dan media
										berbasis audio-visual. Namun, media pembelajaran budaya
										Minangkabau yang mewadahi saat ini cenderung belum begitu
										interaktif, visual yang monoton, dan tidak disesuaikan
										dengan preferensi digital native.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="testing my-10 shadow-2xl ">
						{/* konten dibawah 3 */}
						<div className="card3">
							<div className="card bg-base-100 shadow-sm">
								<figure className="h-[200px]">
									<img src={rakyatmain} alt="monoton" />
								</figure>
								<div className="card-body">
									<div className="card-actions justify-start"></div>
									<h2 className="card-title text-2xl text-[#570808]">
										Media Edukasi Interaktif
									</h2>
									<p className="text-2xm ">
										" Di era digital yang serba cepat, warisan budaya
										Minangkabau justru semakin sulit ditemukan dalam format yang
										menarik dan terpercaya. Karena itu, dibutuhkan Minangverse
										platform sebagai wadah yang menghadirkan budaya Minangkabau
										dengan cara yang lebih dekat, interaktif, dan relevan bagi
										generasi masa kini ".
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// <div>
// 	<h1>Mengapa Minangverse?</h1>
// 	<p>
// Survei Indeks Pembangunan Kebudayaan 2023 menunjukkan bahwa
// pemanfaatan media dan teknologi untuk budaya masih rendah, di bawah
// angka 60 poin, memperlihatkan adanya kesenjangan antara teknologi
// digital dan praktik pelestarian budaya.
// 	</p>
// </div>
export default Section2;
