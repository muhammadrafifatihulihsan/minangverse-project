import CardNav from "../CardNav";
import logo from "../../../public/icon.png";
import "../../styles/pallateColor.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	const items = [
		{
			label: "Introduction",
			bgColor: "#0D0716",
			textColor: "#fff",
			links: [
				{ label: "Landing", ariaLabel: "Landing Page", to: "/" },
				{
					label: "Sejarah",
					ariaLabel: "Introduction Page",
					to: "/introduction",
				},
			],
		},
		{
			label: "Features",
			bgColor: "#270d0d",
			textColor: "#fff",
			links: [
				{ label: "Alat Musik Virtual", ariaLabel: "Musik Page", to: "/alat" },
				{ label: "Kamus Bahasa", ariaLabel: "Kamus Page", to: "/kamus" },
				{ label: "Kartu Keberuntungan", ariaLabel: "Kartu Page", to: "/kartu" },
				{ label: "Live Chat", ariaLabel: "Chat Page", to: "/chat" },
			],
		},
		{
			label: "Contact",
			bgColor: "#271b0d",
			textColor: "#fff",
			links: [
				{
					label: "Email",
					ariaLabel: "Email us",
					href: "mailto:example@mail.com",
				},
				{
					label: "Instagram",
					ariaLabel: "Instagram",
					href: "https://instagram.com",
				},
				{ label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com" },
			],
		},
	];

	return (
		<CardNav
			logo={logo}
			logoAlt="Company Logo"
			items={items}
			baseColor="#fff"
			menuColor="#000"
			buttonBgColor="#111"
			buttonTextColor="#fff"
			ease="power3.out"
		/>
	);
};

export default Navbar;
