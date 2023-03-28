import React from "react";

function ChatWindow(props) {
  const { messages } = props;

  const isMyMessage = messages.sender === "USER";
  const messageClass = isMyMessage
    ? "w-[240px] h-89 bg-[#7D69FE] rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl text-white ml-[120px]"
    : "w-[240px] h-89 bg-[#F3F2FB] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl text-gray ml-[54px]";
  const senderClass = isMyMessage
    ? "text-gray-900 text-right text-[6px] mr-4"
    : "text-[#ADA4E2] text-left text-[6px] ml-4 ml-[72px]";
  const positionClass = isMyMessage ? "justify-end mr-2" : "justify-start ml-2";

  return (
    <>
      <div className="flex flex-row">
        {messages.sender !== "USER" && (
          <div className="relative">
            <div className="w-[36px] h-[36px] bg-[url('/public/logo.jpeg')] bg-cover rounded-lg ml-4 absolute bottom-3" />
          </div>
        )}
        <div className={`${positionClass}`}>
          {messages.sender !== "USER" && (
            <div className={`font-light ${senderClass}`}>
              STEADIO {messages.sender}
            </div>
          )}
          <li
            className={`text-sm min-w-10 font-medium min-w-72 mb-4 rounded-lg px-4 py-3 p-5 ${messageClass}`}
          >
            {messages.text}
          </li>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
