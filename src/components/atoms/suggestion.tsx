import React from "react";
import { useState } from "react";

interface SuggestionProps {
  text: string;
  onClick: () => void;
  hidden?: boolean;
  isLast?: boolean;
  classname: string;
}

const Suggestion: React.FC<SuggestionProps> = ({
  text,
  onClick,
  hidden,
  isLast,
  classname,
}) => {
  return (
    <div
      className={`bg-white border-black border-r border-l hover:bg-gray-200 ${classname}${
        isLast ? "rounded-b-xl" : "" // Apply rounded-b-xl only if isLast
      } ${hidden ? "hidden" : ""}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Suggestion;
