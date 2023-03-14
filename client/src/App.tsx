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
      <div className="m-5 font-sofia-sans font-bold text-18 leading-22 tracking-tighter text-violet-600">
        STEADIO GPT
      </div>
      <div className="w-500 h-82 mb-10">
        <input
          type={"text"}
          value={inputValue}
          className="font-medium w-96 h-100 box-border bg-white border-0.5 border-gray-300 shadow-md rounded-lg px-3 py-3"
          onKeyDown={(e) => sendQuestion(e)}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <ul className="w-96 h-4/5 overflow-auto">
        {message.length !== 0 &&
          message.map((item, idx) => <ChatWindow messages={item} key={idx} />)}
        {loading && <BeatLoader color="#5D49D5" size={10} className="mt-5" />}
      </ul>
    </div>
  );
}

export default App;
