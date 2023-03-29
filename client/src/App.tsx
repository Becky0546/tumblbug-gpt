import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GPTChat, { messageType } from "./components/GPTChat";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [message, setMessage] = useState<messageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (message.length === 0) {
      sendRequest("안녕 GPT!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 font-gothic font-normal leading-4">
      <div
        className={`${
          isOpen ? "translate-y-0" : "translate-y-full"
        }fixed transition-transform duration-300 ease-in-out`}
      >
        <GPTChat
          loading={loading}
          sendRequest={sendRequest}
          message={message}
        />
      </div>

      <ToggleButton setButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
