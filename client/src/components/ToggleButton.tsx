import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

interface buttonType {
  setButtonClick: Function;
}

const ToggleButton = ({ setButtonClick }: buttonType) => {
  return (
    <div className="absolute bottom-0 right-0 mb-20 mr-2">
      <button
        onClick={() => setButtonClick()}
        className="drop-shadow-2xl  bg-[#7D69FE] w-12 h-12 justify-center flex rounded-2xl"
      >
        <HiOutlineChatAlt2 color="white" size={28} className="mt-[9px]" />
      </button>
    </div>
  );
};

export default ToggleButton;
