import { Link } from "react-router-dom";
import alatMusik from "../../data/dummy/alatMusik";
import Navbar from "../../components/Internal/Navbar";
import "../../components/Internal/styling/alatMusik.css";

const Musik = () => {
	return (
		<>
			<div className="alatmusik">
				<div className="alatmusik min-h-screen bg-white">
					<Navbar />

					<div className="max-w-4xl mx-auto py-16 px-6 text-[#333]">
						{/* Judul */}
						<h1
							className="text-4xl font-extrabold text-center mb-10 tracking-widest 
					bg-linear-to-r from-[#421c18] to-[#471818] 
					bg-clip-text text-transparent"
						>
							<br />
							<br />
							<br />
							Alat Musik{" "}
							<span className="underline underline-offset-4 decoration-4 decoration-yellow-300">
								Minangkabau
							</span>
						</h1>

						{/* LIST */}
						<div className="flex flex-col gap-4">
							{alatMusik.map((item) => (
								<div
									key={item.id}
									className="
								collapse collapse-arrow 
								rounded-xl border border-[#e8d9b5]/50 
								bg-[#faf8f3]/60 
								backdrop-blur-sm
								transition-all duration-200
								hover:border-[#e8d9b5]/80
								hover:bg-[#faf8f3]/80
							"
								>
									<input type="checkbox" />

									{/* HEADER */}
									<div className="collapse-title flex items-center gap-4">
										<img
											src={item.srcGambar}
											alt={item.nama}
											className="w-24 h-24 object-cover rounded-lg 
									ring-1 ring-[#e8d9b5]/70"
										/>

										<div>
											<h2 className="text-xl font-semibold text-[#333]">
												{item.nama}
											</h2>
											<p className="text-sm opacity-70">
												Kategori: {item.kategori}
											</p>
										</div>
									</div>

									{/* CONTENT */}
									<div className="collapse-content text-[#444]">
										<p className="text-sm leading-relaxed mb-4 opacity-90">
											{item.deskripsi}
										</p>

										<Link
											to={`/alat/talempong`} //kalau udah 1 1 alat musik nya baru pakai ${item.id} kalau belum hapus saja
											className="btn btn-sm border-0 text-[#333] font-semibold
									bg-linear-to-r from-[#fceabb] to-[#f7d08a]"
										>
											Coba Alat Musik
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Musik;
