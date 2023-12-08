import React, { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");
  console.log(input);
  const handleSearch = () => {
    onSearch(input);
  };
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-l"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded-r" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
