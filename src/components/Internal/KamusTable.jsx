const KamusTable = () => {
	return (
		<>
			<div>
				<div className="tabelkamus overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>Indonesia</th>
								<th>Minang</th>
								<th>Jenis Kata</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 sample*/}
							<tr className="bg-base-200">
								<th>1</th>
								<td>Cy Ganderton</td>
								<td>Quality Control Specialist</td>
								<td>Blue</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="kolomspeak w-1/3">
					<div className="card card-border bg-amber-300 w-96">
						<div className="card-body">
							<h2 className="card-title">Card Title</h2>
							<p>
								A card component has a figure, a body part, and inside body
								there are title and actions parts
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default KamusTable;
