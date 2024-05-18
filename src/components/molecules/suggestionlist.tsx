"use client";
import React, { useState } from "react";
import Suggestion from "../atoms/suggestion";

interface SuggestionsListProps {
  suggestions: string[];
  searchTerm: string;
  classname: string;
  onClickSuggestion: (suggestion: string) => void;
}

export default function suggestionlist({
  suggestions,
  searchTerm,
  classname,
  onClickSuggestion,
}: SuggestionsListProps) {
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const top5Suggestions = filteredSuggestions.slice(0, 5);

  return (
    <div className="absolute mt-[75px] z-10 ">
      {top5Suggestions.map((suggestion, index) => (
        <Suggestion
          key={suggestion}
          text={suggestion}
          onClick={() => onClickSuggestion(suggestion)}
          // hidden={suggestion.toLowerCase() === searchTerm.toLowerCase()} // Sembunyikan jika sama
          isLast={index === top5Suggestions.length - 1}
          classname={classname}
        />
      ))}
    </div>
  );
}
