// Komponen input box
const ChatInput = ({ input, setInput, sendMessage }) => {
	const handleKeyPress = (e) => {
		if (e.key === "Enter") sendMessage();
	};

	return (
		<div className="p-4 bg-gray-200 flex w-full sticky bottom-0 rounded-xl">
			<input
				type="text"
				className="flex-1 p-2 rounded-l border border-gray-300 focus:outline-none"
				placeholder="Type a message..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<button
				className="bg-[#600b0b] text-white px-4 rounded-r hover:bg-[#800c0c]"
				onClick={sendMessage}
			>
				Send
			</button>
		</div>
	);
};

export default ChatInput;
