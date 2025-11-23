import iconnav from "../../assets/iconnav.png";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm w-full justify-between">
			<div className="flex items-center">
				<img
					src={iconnav}
					alt=""
					srcset=""
					className="w-15 scale-x-80 items-center flex mr-0"
				/>
				<h1 className="text-xl">Minangverse</h1>
			</div>
			<div className="flex">
				<ul className="menu menu-horizontal px-20">
					<li>
						<details>
							<summary>Menu</summary>
							<ul className="bg-base-100 rounded-t-none p-2">
								<li>
									<a>Link</a>
								</li>
								<li>
									<a>Link 2</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
