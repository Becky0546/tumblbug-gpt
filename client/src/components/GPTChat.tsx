import React, { useLayoutEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import ChatWindow from "./ChatWindow";

export interface messageType {
  sender: "USER" | "GPT";
  text: string;
}

interface gptWindowType {
  loading: boolean;
  message: messageType[];
  sendRequest: (string) => void;
}

const GPTChat = ({ sendRequest, message, loading }: gptWindowType) => {
  const [inputValue, setInputValue] = useState("");
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const sendQuestion = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && inputValue !== "") {
      const inputElement = e.target as HTMLInputElement;
      setInputValue("");
      sendRequest(inputElement.value);
    }
  };

  useLayoutEffect(() => {
    const messageContainer = messageContainerRef.current;
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [message]);

  return (
    <div className="absolute bottom-0 right-0 mr-10">
      <div
        className="text-left flex items-center justify-left p-5 w-[372px] h-[52px] bg-[#F1F0FA] rounded-t-2xl 
                  absolute mt-10 z-50 font-sofia-sans font-bold text-18 leading-22 tracking-tighter text-[#C1BBE5]"
      >
        <div className="rounded-2xl bg-[#48b51c] w-2 h-2 mr-2" />
        <div>STEADIO GPT</div>
        <button className="ml-[200px]">
          <TfiClose color="#7D69FE" />
        </button>
      </div>
      <div
        ref={messageContainerRef}
        className="tracking-tight pt-[64px] pb-[64px] w-[372px] h-[630px] mt-10 bg-white shadow-2xl drop-shadow-2xl 
                  rounded-2xl overflow-y-scroll overflow-x-hidden scrollbar-hide relative z-0"
      >
        <ul className="w-96">
          {message.length !== 0 &&
            message.map((item) => (
              <ChatWindow messages={item} key={uuidv4()} />
            ))}
          {loading && (
            <div className="w-full h-full flex justify-center items-center">
              <BeatLoader color="#5D49D5" size={10} className="mt-6 mb-6" />
            </div>
          )}
        </ul>
      </div>
      <div className="absolute bottom-3 right-[11px]">
        {inputValue === "" && (
          <IoIosArrowForward
            color="#C1BBE5"
            size={24}
            className="absolute mt-3 ml-3"
          />
        )}
        <input
          type={"text"}
          value={inputValue}
          className="bg-[#F1F0FA] rounded-2xl text-[14px] p-5 w-[350px] h-[50px] border-[1px] border-[#E2DFE3]"
          onKeyDown={(e) => sendQuestion(e)}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default GPTChat;
