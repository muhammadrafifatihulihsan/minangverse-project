import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../components/Internal/styling/TalempongLive.css";
import mejatalempong from "../../../assets/mejatalempong.jpg";
import talempongImg from "../../../assets/talempong1.png";

// AUDIO
import do1 from "../../../assets/talempong_audio/do.mp3";
import re from "../../../assets/talempong_audio/re.mp3";
import mi from "../../../assets/talempong_audio/mi.mp3";
import fa from "../../../assets/talempong_audio/fa.mp3";
import sol from "../../../assets/talempong_audio/sol.mp3";
import la from "../../../assets/talempong_audio/la.mp3";
import si from "../../../assets/talempong_audio/si.mp3";
import do2 from "../../../assets/talempong_audio/doo.mp3";

const TalempongLive = () => {
	const navigate = useNavigate();

	const talempongSet = [
		{ note: "Do", audio: do1, x: "27%", y: "26%" },
		{ note: "Re", audio: re, x: "48%", y: "26%" },
		{ note: "Mi", audio: mi, x: "69%", y: "26%" },
		{ note: "Fa", audio: fa, x: "90%", y: "26%" },
		{ note: "Sol", audio: sol, x: "27%", y: "73%" },
		{ note: "La", audio: la, x: "48%", y: "73%" },
		{ note: "Si", audio: si, x: "69%", y: "73%" },
		{ note: "Do2", audio: do2, x: "90%", y: "73%" },
	];

	const [players] = useState(talempongSet.map((t) => new Audio(t.audio)));
	const [activeIndex, setActiveIndex] = useState(null);

	const handlePlay = (index) => {
		const audio = players[index];
		audio.currentTime = 0;
		audio.play();

		setActiveIndex(index);
		setTimeout(() => setActiveIndex(null), 150);
	};

	// EVENT KEYBOARD 1–8
	useEffect(() => {
		const handleKey = (e) => {
			const key = parseInt(e.key);
			if (key >= 1 && key <= 8) {
				handlePlay(key - 1);
			}
		};

		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [players]);

	return (
		<div
			className="
        talemponglive w-full h-screen overflow-hidden 
        flex justify-center items-center 
        relative
        bg-linear-to-br from-[#ffeab9] via-[#ffecce] to-[#ffc15e]
      "
		>
			{/* BACK BUTTON */}
			<button
				onClick={() => navigate(-1)}
				className="
          absolute top-6 right-6 
          btn btn-md bg-white/80 text-black font-semibold 
          border border-gray-200 
          hover:bg-white hover:shadow-md
          backdrop-blur-md outline shadow-2xl
        "
			>
				Kembali
			</button>

			{/* NOTE / PANDUAN */}
			<div
				className="
          absolute top-6 left-6 
          bg-amber-100/90 backdrop-blur-lg 
          px-5 py-3 rounded-xl shadow-lg border border-gray-200
          text-sm text-gray-700 font-medium
        "
			>
				<p>
					<span className="font-bold">Notes: </span> Mainkan talempong dengan
					klik atau tekan keyboard <strong>1–8</strong>.
				</p>
			</div>

			<div className="relative">
				<img
					src={mejatalempong}
					className="w-[900px] select-none"
					alt="meja talempong"
				/>

				{/* TALEMPONG ICONS */}
				{talempongSet.map((item, idx) => (
					<img
						key={idx}
						src={talempongImg}
						alt={item.note}
						onClick={() => handlePlay(idx)}
						className={`
              absolute w-50 cursor-pointer transition 
              hover:scale-110 active:scale-95
              ${activeIndex === idx ? "scale-125" : ""}
            `}
						style={{
							left: item.x,
							top: item.y,
							transform: "translate(-50%, -50%)",
						}}
					/>
				))}

				{/* KEYBOARD GUIDE */}
				<div
					className="
            absolute left-1/2 -bottom-24 transform -translate-x-1/2
            flex gap-3
            bg-white/80 backdrop-blur-xl 
            px-6 py-3 rounded-xl shadow-lg border border-gray-200
          "
				>
					{talempongSet.map((item, idx) => (
						<div
							key={idx}
							className={`
                flex flex-col items-center text-center px-2
                transition 
                ${
									activeIndex === idx
										? "scale-110 text-amber-600 font-bold"
										: ""
								}
              `}
						>
							<div
								className={`
                  w-8 h-8 flex items-center justify-center 
                  rounded-md border 
                  text-sm font-semibold
                  ${
										activeIndex === idx
											? "bg-amber-200 border-amber-500"
											: "bg-white border-gray-300"
									}
                `}
							>
								{idx + 1}
							</div>
							<p className="text-xs mt-1 text-gray-700">{item.note}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TalempongLive;
