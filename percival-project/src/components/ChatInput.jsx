import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputData(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    // saveInputData(""); this results in an undefined
  }

  return (
    <div className="flex-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="50"
        onChange={saveInputData}
        value={inputText}
        className="input-textbox"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
