import React from "react";
import { useState } from "react";
import SuggestionsList from "../molecules/suggestionlist";

interface LiveSuggestionSearchBarProps {
  data: string[];
  classname: string;
}

const SearchBar: React.FC<LiveSuggestionSearchBarProps> = ({
  data,
  classname,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setShowSuggestions(newSearchTerm.length > 0); // Show suggestions when searchTerm is not empty
    if (newSearchTerm.length === 0) {
      setShowSuggestions(false);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Hide the suggestions list when Enter is pressed
      setShowSuggestions(false);
    } else if (event.key === "Escape") {
      // Hide the suggestions list when Escape is pressed
      setShowSuggestions(false);
      setSearchTerm("");
    }
  };
  const handleClickSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };
  return (
    <div className="relative">
      <input
        className={`${classname} border-black border rounded-xl `}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onFocus={handleSearchChange}
      />
      {showSuggestions && (
        <SuggestionsList
          suggestions={data}
          searchTerm={searchTerm}
          onClickSuggestion={(suggestion) => handleClickSuggestion(suggestion)}
          classname={classname}
          // Position suggestions list below search bar
        />
      )}
    </div>
  );
};

export default SearchBar;
