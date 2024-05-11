import React from "react";
import { useState } from "react";
import SuggestionsList from "../molecules/suggestionlist";

interface LiveSuggestionSearchBarProps {
  suggestions: string[];
}

const SearchBar: React.FC<LiveSuggestionSearchBarProps> = ({ suggestions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setShowSuggestions(newSearchTerm.length > 0); // Show suggestions when searchTerm is not empty
  };

  return (
    <div className="relative">
      <input
        className="w-[300px] h-[60px] text-2xl font-semibold text-center border-black border rounded-xl my-2 mx-2 lg:w-[300px] lg:h-[70px]"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {showSuggestions && (
        <SuggestionsList
          suggestions={suggestions}
          searchTerm={searchTerm}
          onClickSuggestion={(suggestion) => setSearchTerm(suggestion)}
          // Position suggestions list below search bar
        />
      )}
    </div>
  );
};

export default SearchBar;
