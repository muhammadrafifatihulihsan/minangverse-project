import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<div>
				<div className="hero bg-base-200 min-h-screen">
					<div className="hero-content text-center">
						<div className="max-w-md">
							<h1 className="text-5xl font-bold">Halaman Tidak Ditemukan</h1>
							<p className="py-6">
								Ups! Halaman yang anda cari tidak ditemukan, coba periksa
								kembali, terimakasih o_o
							</p>
							<Link to="/">
								<button className="btn btn-default">Kembali</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
