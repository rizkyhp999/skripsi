import React, { useState, useEffect } from "react";

const LiveSearch: React.FC<{
  data: any[];
  keyProperty?: string;
  displayProperties?: string[];
}> = ({ data, keyProperty, displayProperties = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const newFilteredData = data.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(newFilteredData);
  }, [searchTerm, data]);

  const displayItem = (item: any) => {
    if (displayProperties.length > 0) {
      return displayProperties.map((prop) => (
        <p key={prop}>
          {prop}: {item[prop]}
        </p>
      ));
    } else {
      return Object.keys(item).map((prop) => (
        <p key={prop}>
          {prop}: {item[prop]}
        </p>
      ));
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />

      {searchTerm && (
        <ul className="absolute z-10 bg-white shadow-md rounded-md w-full max-h-48 overflow-y-auto">
          {filteredData.map((item) => (
            <li
              key={keyProperty ? item[keyProperty] : item.id}
              className="p-2 hover:bg-gray-100"
            >
              {displayItem(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LiveSearch;
