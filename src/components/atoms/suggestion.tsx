"use client";
import React from "react";
import { useState } from "react";
interface SuggestionProps {
  text: string;
  onClick: () => void;
  hidden?: boolean;
  isLast?: boolean;
  classname: string;
}
export default function suggestion({
  text,
  onClick,
  hidden,
  isLast,
  classname,
}: SuggestionProps) {
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
}
