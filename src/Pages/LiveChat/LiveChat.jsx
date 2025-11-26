// LiveChat.jsx
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Internal/Navbar";
import ChatInput from "../../components/Internal/ChatInput";
import { supabase } from "../../lib/supabaseClient";

const MESSAGES_LIMIT = 200;

const LiveChat = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [anonUser, setAnonUser] = useState(null); // user anonim
	const [showNameModal, setShowNameModal] = useState(false);
	const [tempName, setTempName] = useState(""); // input sementara nama
	const chatEndRef = useRef(null);

	// Cek localStorage saat mount
	useEffect(() => {
		const raw = localStorage.getItem("anon_user");
		if (raw) {
			try {
				setAnonUser(JSON.parse(raw));
			} catch (e) {
				setShowNameModal(true);
			}
		} else {
			setShowNameModal(true);
		}
	}, []);

	// Scroll otomatis ke bawah
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	// Fetch pesan awal
	useEffect(() => {
		if (!anonUser) return;
		let mounted = true;
		(async () => {
			const { data, error } = await supabase
				.from("messages")
				.select("*")
				.order("created_at", { ascending: true })
				.limit(MESSAGES_LIMIT);
			if (error) console.error("Fetch messages error:", error);
			if (mounted) setMessages(data || []);
		})();
		return () => {
			mounted = false;
		};
	}, [anonUser]);

	// Subscribe ke pesan baru secara realtime
	useEffect(() => {
		if (!anonUser) return;
		const channel = supabase
			.channel("public:messages")
			.on(
				"postgres_changes",
				{ event: "INSERT", schema: "public", table: "messages" },
				(payload) => {
					setMessages((prev) => [...prev, payload.new]);
				}
			)
			.subscribe();

		return () => supabase.removeChannel(channel);
	}, [anonUser]);

	// Kirim pesan
	const sendMessage = async () => {
		if (!input.trim()) return;

		const newRow = {
			user_id: anonUser.user_id,
			username: anonUser.username,
			content: input.trim(),
		};

		const { error } = await supabase.from("messages").insert([newRow]);
		if (error) console.error("Insert message error:", error);

		setInput(""); // reset input
	};

	// Submit nama dari modal
	const handleSubmitName = () => {
		if (!tempName.trim()) return; // wajib diisi
		const user = { user_id: crypto.randomUUID(), username: tempName.trim() };
		localStorage.setItem("anon_user", JSON.stringify(user));
		setAnonUser(user);
		setShowNameModal(false);
	};

	return (
		<div className="bglivechat">
			<div className="flex flex-col h-screen mx-90">
				{/* Navbar */}
				<Navbar />

				{/* Chat messages area */}
				<div className="flex-1 overflow-y-auto p-4 space-y-4 mt-20">
					{messages.map((msg) => (
						<div
							key={msg.id}
							className={`chat ${
								anonUser && msg.user_id === anonUser.user_id
									? "chat-end"
									: "chat-start"
							}`}
						>
							<div className="chat-header font-semibold">
								{msg.username}
								<time className="text-xs opacity-50 ml-2">
									{msg.created_at
										? new Date(msg.created_at).toLocaleTimeString()
										: ""}
								</time>
							</div>
							<div className="chat-bubble bg-white shadow">{msg.content}</div>
							<div className="chat-footer opacity-50 text-xs">
								{anonUser && msg.user_id === anonUser.user_id ? "Sent" : ""}
							</div>
						</div>
					))}
					<div ref={chatEndRef}></div>
				</div>

				{/* Input box */}
				{anonUser && (
					<ChatInput
						input={input}
						setInput={setInput}
						sendMessage={sendMessage}
					/>
				)}

				{/* DaisyUI Modal untuk nama */}
				<input
					type="checkbox"
					id="nameModal"
					className="modal-toggle"
					checked={showNameModal}
					readOnly
				/>
				<div className="modal">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Masukkan Nama Anda</h3>
						<p className="py-2">
							Nama ini akan digunakan di chat dan wajib diisi.
						</p>
						<input
							type="text"
							placeholder="Nama..."
							className="input input-bordered w-full mt-2"
							value={tempName}
							onChange={(e) => setTempName(e.target.value)}
						/>
						<div className="modal-action">
							<button className="btn btn-primary" onClick={handleSubmitName}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LiveChat;
