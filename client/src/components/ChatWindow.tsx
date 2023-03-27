import React from "react";

function ChatWindow(props) {
  const { messages } = props;

  const isMyMessage = messages.sender === "USER";
  const messageClass = isMyMessage
    ? "w-[240px] h-89 bg-[#7D69FE] rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl text-white"
    : "w-[240px] h-89 bg-[#F3F2FB] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl text-gray";
  const senderClass = isMyMessage
    ? "text-gray-900 text-right text-[10px] mr-8"
    : "text-violet-500 text-left text-[10px] ml-8";
  const positionClass = isMyMessage ? "justify-end mr-5" : "justify-start ml-5";

  return (
    <>
      <div>
        {messages.sender !== "USER" && (
          <div className="flex flex-row">
            <div className="w-[36px] h-[36px] bg-[url('/public/logo.jpeg')] bg-cover rounded-lg ml-4" />
            <div className={`font-light text-sm ${senderClass}`}>
              STEADIO {messages.sender}
            </div>
          </div>
        )}
        <div className={`flex ${positionClass}`}>
          <li
            className={`text-sm min-w-10 font-medium min-w-72 mb-3 rounded-lg px-3 py-3 p-5 ${messageClass}`}
          >
            {messages.text}
          </li>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
