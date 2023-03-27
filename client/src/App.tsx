import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import ChatWindow from "./components/ChatWindow";

interface messageType {
  sender: "USER" | "GPT";
  text: string;
}

function App() {
  const [message, setMessage] = useState<messageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const sendRequest = async (userInput: string) => {
    const question: messageType = {
      sender: "USER",
      text: userInput,
    };

    message.length !== 0 && setMessage((preAnswer) => [...preAnswer, question]);
    setLoading(true);

    try {
      const url = "http://localhost:8080/gpt";
      const body = { question: userInput };
      const response = await axios.post(url, body);

      const answer: messageType = {
        sender: "GPT",
        text: response.data.message,
      };

      setMessage((preAnswer) => [...preAnswer, answer]);
      setLoading(false);
    } catch (error) {
      window.alert(error);
    }
  };

  const sendQuestion = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      const inputElement = e.target as HTMLInputElement;
      setInputValue("");
      sendRequest(inputElement.value);
    }
  };

  useEffect(() => {
    if (message.length === 0) {
      sendRequest("안녕 GPT!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 font-sans">
      <div className="block shadow-md text-left flex items-center justify-left p-5 w-[380px] h-[52px] bg-[#F1F0FA] rounded-t-2xl absolute mt-10 z-50 m-5 font-sofia-sans font-bold text-18 leading-22 tracking-tighter text-[#C1BBE5]">
        STEADIO GPT
      </div>
      <div className="pt-[70px] w-[380px] h-[630px] mt-10 bg-white shadow-2xl drop-shadow-2xl rounded-2xl overflow-y-scroll scrollbar-hide relative z-0">
        <ul className="w-96">
          {message.length !== 0 &&
            message.map((item, idx) => (
              <ChatWindow messages={item} key={idx} />
            ))}
          {loading && <BeatLoader color="#5D49D5" size={10} className="mt-5" />}
        </ul>
      </div>
      <div>
        <input
          type={"text"}
          value={inputValue}
          className="bg-[#F1F0FA] rounded-2xl p-5 z-50 w-[360px] h-[50px] absolute top-[610px] left-[540px] border-[1px] border-[#E2DFE3]"
          onKeyDown={(e) => sendQuestion(e)}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
