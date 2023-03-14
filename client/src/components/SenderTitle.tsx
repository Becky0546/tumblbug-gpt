import React from "react";

function SenderTitle(props) {
  const { messages } = props;

  const senderClass =
    messages.sender === "USER"
      ? "text-gray-900 text-right"
      : "text-violet-500 text-left";

  return <p className={`font-light text-sm ${senderClass}`}>{item.sender}</p>;
}

export default SenderTitle;
