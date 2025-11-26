"use client";

import { useState } from "react";
import "../../components/Internal/styling/Kartu.css";
import { X } from "lucide-react";
import funFact from "../../data/dummy/funfact";
import { div } from "motion/react-client";
import Navbar from "../../components/Internal/Navbar";
import { Link } from "react-router-dom";

export default function LuckyCard() {
	const [currentCards, setCurrentCards] = useState(() => {
		return funFact.slice(0, 3).map((card, idx) => ({
			...card,
			displayId: idx + 1,
		}));
	});

	const [openedCards, setOpenedCards] = useState(new Set());
	const [selectedCard, setSelectedCard] = useState(null);
	const [flipped, setFlipped] = useState(false);
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);

	const handleCardClick = (card) => {
		setSelectedCard(card);
		setFlipped(true);
		setOpenedCards((prev) => new Set(prev).add(card.displayId));
	};

	const handleClose = () => {
		setFlipped(false);
		setTimeout(() => setSelectedCard(null), 300);
	};

	const handleRandom = () => {
		if (openedCards.size === 3) {
			const newCards = Array.from({ length: 3 }, (_, idx) => {
				const randomCard = funFact[Math.floor(Math.random() * funFact.length)];
				return {
					...randomCard,
					displayId: idx + 1,
				};
			});
			setCurrentCards(newCards);
			setOpenedCards(new Set());
		}
	};

	const allCardsOpened = openedCards.size === 3;

	const warmColors = [
		{
			bg: "linear-gradient(135deg, rgba(255, 245, 230, 0.6) 0%, rgba(255, 240, 220, 0.5) 100%)",
			border: "rgba(255, 179, 127, 0.3)",
			accent: "#FFB37F",
			text: "#5D4E37",
		},
		{
			bg: "linear-gradient(135deg, rgba(255, 235, 205, 0.6) 0%, rgba(255, 228, 196, 0.5) 100%)",
			border: "rgba(255, 165, 100, 0.3)",
			accent: "#FFA564",
			text: "#6B5344",
		},
		{
			bg: "linear-gradient(135deg, rgba(255, 228, 196, 0.6) 0%, rgba(255, 218, 185, 0.5) 100%)",
			border: "rgba(255, 140, 90, 0.3)",
			accent: "#FF8C5A",
			text: "#704E38",
		},
	];

	return (
		<>
			<div className="kartu bg-amber-400">
				{/* BACK BUTTON */}
				<Link
					to="/"
					className="
						absolute top-6 right-6 
						btn btn-md bg-white/80 text-black font-semibold 
						border border-gray-200 
						hover:bg-white hover:shadow-md
						backdrop-blur-md outline shadow-2xl
					"
				>
					Kembali
				</Link>
				{/* <Navbar /> */}
				<main className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50">
					<div className="container mx-auto px-4 py-16 md:py-24">
						{/* Header Section */}
						<div className="text-center mb-20">
							<h1 className="text-3xl md:text-5xl font-extrabold tracking-wider mb-4 bg-linear-to-r from-amber-800 via-orange-700 to-rose-700 bg-clip-text text-transparent">
								Kartu Keberuntungan
							</h1>
							<p className="text-lg md:text-xl text-amber-900 opacity-75 mb-8">
								Jelajahi fakta menarik budaya Minangkabau
							</p>

							<button
								onClick={handleRandom}
								disabled={!allCardsOpened}
								className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
									allCardsOpened
										? "bg-linear-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:scale-105 cursor-pointer"
										: "bg-amber-200 text-amber-700 cursor-not-allowed opacity-50"
								}`}
							>
								{allCardsOpened
									? "Ambil Kartu Baru"
									: `Buka Semua Kartu (${openedCards.size}/3)`}
							</button>
						</div>

						{/* Card Grid */}
						<div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
							{currentCards.map((card) => {
								const colorIndex = (card.displayId - 1) % warmColors.length;
								const currentColor = warmColors[colorIndex];
								const isHovered =
									card.displayId === 1
										? isHovered1
										: card.displayId === 2
										? isHovered2
										: isHovered3;

								return (
									<div
										key={card.displayId}
										onMouseEnter={() => {
											if (card.displayId === 1) setIsHovered1(true);
											if (card.displayId === 2) setIsHovered2(true);
											if (card.displayId === 3) setIsHovered3(true);
										}}
										onMouseLeave={() => {
											if (card.displayId === 1) setIsHovered1(false);
											if (card.displayId === 2) setIsHovered2(false);
											if (card.displayId === 3) setIsHovered3(false);
										}}
										onClick={() => handleCardClick(card)}
										className="cursor-pointer transition-all duration-300"
										style={{
											transform: isHovered
												? "translateY(-8px)"
												: "translateY(0)",
										}}
									>
										<div
											className="rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden w-56 h-72 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-md"
											style={{
												background: currentColor.bg,
												border: `2px solid ${currentColor.border}`,
												backdropFilter: "blur(10px)",
											}}
										>
											{/* Decorative accent */}
											<div
												className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-15"
												style={{
													background: currentColor.accent,
													filter: "blur(20px)",
												}}
											/>

											{/* Card number */}
											<div className="relative z-10">
												<div
													className="text-4xl font-bold opacity-40"
													style={{ color: currentColor.text }}
												>
													#{card.displayId.toString().padStart(2, "0")}
												</div>
											</div>

											{/* Card title */}
											<div className="relative z-10 flex-1 flex items-center">
												<h3
													className="text-lg font-bold leading-snug line-clamp-4"
													style={{ color: currentColor.text }}
												>
													{card.title}
												</h3>
											</div>

											{/* Bottom indicator */}
											<div
												className="relative z-10 text-sm font-medium opacity-70"
												style={{ color: currentColor.accent }}
											>
												Klik untuk buka
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Card Detail Modal */}
					{selectedCard && (
						<div
							className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
							style={{
								backgroundColor: flipped
									? "rgba(93, 78, 55, 0.3)"
									: "rgba(0, 0, 0, 0)",
								pointerEvents: flipped ? "auto" : "none",
							}}
							onClick={handleClose}
						>
							{(() => {
								const colorIndex =
									(selectedCard.displayId - 1) % warmColors.length;
								const currentColor = warmColors[colorIndex];

								return (
									<div
										className="rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-500 relative backdrop-blur-md border-2"
										style={{
											background: currentColor.bg,
											borderColor: currentColor.border,
											transform: flipped
												? "scale(1) translateY(0)"
												: "scale(0.8) translateY(20px)",
											opacity: flipped ? 1 : 0,
										}}
										onClick={(e) => e.stopPropagation()}
									>
										<button
											onClick={handleClose}
											className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:opacity-70"
											style={{ color: currentColor.text }}
										>
											<X size={24} />
										</button>

										{/* Card number display */}
										<div className="mb-6">
											<div
												className="text-5xl font-bold mb-3 opacity-50"
												style={{ color: currentColor.text }}
											>
												#{selectedCard.displayId.toString().padStart(2, "0")}
											</div>
											<h2
												className="text-3xl font-bold"
												style={{ color: currentColor.text }}
											>
												{selectedCard.title}
											</h2>
										</div>

										<div
											className="h-1 mb-6 rounded-full opacity-20"
											style={{ backgroundColor: currentColor.text }}
										/>

										{/* Description */}
										<p
											className="text-base leading-relaxed mb-8 text-justify"
											style={{ color: currentColor.text, opacity: 0.9 }}
										>
											{selectedCard.desc}
										</p>

										{/* Close button */}
										<button
											onClick={handleClose}
											className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
											style={{
												background: `linear-gradient(135deg, ${currentColor.accent} 0%, ${currentColor.text} 100%)`,
											}}
										>
											Tutup
										</button>
									</div>
								);
							})()}
						</div>
					)}
				</main>
			</div>
		</>
	);
}
