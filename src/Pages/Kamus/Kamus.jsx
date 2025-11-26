import { useState } from "react";
import kosaKataMinang from "../../data/dummy/kosaKataMinang";
import Navbar from "../../components/Internal/Navbar";
import StripBatik from "../../components/Internal/StripBatik";

const ITEMS_PER_PAGE = 10;

const KamusTable = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const filtered = kosaKataMinang.filter((item) => {
		const s = search.toLowerCase();
		return (
			item.indonesia.toLowerCase().includes(s) ||
			item.minang.some((m) => m.toLowerCase().includes(s))
		);
	});

	// Pagination logic
	const startIndex = (page - 1) * ITEMS_PER_PAGE;
	const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

	const handlePlay = (voice) => {
		const audio = new Audio(`/voice_kamus/${voice}.aac`);

		audio.play();
	};

	return (
		<>
			<div className="">
				<Navbar />
			</div>
			<StripBatik />
			<div className="w-full px-6 py-10 mt-5 flex flex-col gap-8">
				{/* Heading */}
				<div className="text-center">
					<h1 className="text-4xl font-extrabold mv-text-main mb-1 tracking-wide">
						Kamus Minangverse
					</h1>
					<p className="text-gray-600">
						Telusuri kosakata Minangkabau lengkap dengan contoh kalimat dan
						audio.
					</p>
				</div>

				{/* SEARCH */}
				<div className="form-control w-full max-w-xl mx-auto">
					<label className="label">
						<span className="label-text font-semibold text-lg mv-text-red-dark">
							Cari Kosakata
						</span>
					</label>
					<input
						type="text"
						placeholder="Cari kata Indonesia atau Minang..."
						className="input input-bordered w-full mv-bg-light outline-2 outline-red-800"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							setPage(1);
						}}
					/>
				</div>

				{/* TABLE */}
				<div className="overflow-x-auto shadow-lg rounded-2xl bg-white p-4 border border-(--mv-gold-soft)">
					<table className="table w-full">
						<thead className="mv-bg-gold-soft">
							<tr className="text-(--mv-red-700)">
								<th>No</th>
								<th>Indonesia</th>
								<th>Minang</th>
								<th>Kalimat</th>
								<th>Arti</th>
								<th>Audio</th>
							</tr>
						</thead>

						<tbody>
							{paginated.map((item, index) => (
								<tr key={item.id} className="hover">
									<td className="font-bold">{startIndex + index + 1}</td>

									<td className="font-semibold mv-text-red-dark">
										{item.indonesia}
									</td>

									<td className="mv-text-main">{item.minang.join(", ")}</td>

									<td>{item.kalimat}</td>
									<td>{item.arti}</td>

									<td>
										<button
											onClick={() => handlePlay(item.voice)}
											className="btn btn-sm btn-ghost hover:bg-(--mv-gold-soft)"
										>
											{/* Icon Speaker Elegan */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 mv-text-red-dark"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
												<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
												<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
											</svg>
										</button>
									</td>
								</tr>
							))}

							{paginated.length === 0 && (
								<tr>
									<td colSpan="6" className="text-center text-gray-500 py-6">
										Tidak ada hasil ditemukan.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{/* PAGINATION */}
				<div className="flex justify-center mt-3">
					<div className="join">
						{[...Array(totalPages)].map((_, i) => (
							<button
								key={i}
								className={`join-item btn ${
									page === i + 1 ? "mv-bg-red-main text-white" : "btn-ghost"
								}`}
								onClick={() => setPage(i + 1)}
							>
								{i + 1}
							</button>
						))}
					</div>
				</div>
			</div>
			<StripBatik />
		</>
	);
};

export default KamusTable;
