import React, { useState } from "react";
import Suggestion from "../atoms/suggestion";

interface SuggestionsListProps {
  suggestions: string[];
  searchTerm: string;
  onClickSuggestion: (suggestion: string) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  searchTerm,
  onClickSuggestion,
}) => {
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const top5Suggestions = filteredSuggestions.slice(0, 5);

  return (
    <div className="absolute mt-1 z-10">
      {top5Suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          text={suggestion}
          onClick={() => onClickSuggestion(suggestion)}
          hidden={suggestion.toLowerCase() === searchTerm.toLowerCase()} // Sembunyikan jika sama
        />
      ))}
    </div>
  );
};

export default SuggestionsList;
