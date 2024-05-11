import React from "react";
import { useState } from "react";

interface SuggestionProps {
  text: string;
  onClick: () => void;
  hidden?: boolean;
}

const Suggestion: React.FC<SuggestionProps> = ({ text, onClick, hidden }) => {
  return (
    <div
      className={`w-[300px] h-[60px] text-2xl font-semibold text-center border-black border  mx-2 bg-white lg:w-[300px] lg:h-[70px] flex justify-center items-center hover:bg-blue-100 ${
        hidden ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Suggestion;
