import Navbar from "../../components/Internal/Navbar";
import KamusTable from "../../components/Internal/KamusTable";

const Kamus = () => {
	return (
		<>
			<div className="kamus">
				<div className="pembagi2 w-2/3 flex justify-between content-between">
					<KamusTable />
				</div>
			</div>
		</>
	);
};

export default Kamus;
