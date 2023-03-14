import React from "react";

function ChatWindow(props) {
  const { messages } = props;

  const isMyMessage = messages.sender === "USER";
  const messageClass = isMyMessage
    ? "bg-gray-200 text-right"
    : "bg-violet-100 text-left";
  const senderClass = isMyMessage
    ? "text-gray-900 text-right"
    : "text-violet-500 text-left";

  return (
    <>
      <p className={`font-light text-sm ${senderClass}`}>{messages.sender}</p>
      <li
        className={`text-sm min-w-10 font-medium min-w-72 mb-3 rounded-lg px-3 py-3 p-5 ${messageClass}`}
      >
        {messages.text}
      </li>
    </>
  );
}

export default ChatWindow;
