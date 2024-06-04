import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

//   TODO: update when backend api is ready
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className="pl-4 border border-[#D9D9D9] rounded-md h-9 focus:outline-none focus:ring-gray-500"
      />
    </div>
  );
};

export default SearchBar;
