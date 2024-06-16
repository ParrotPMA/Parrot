import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string
  isValue?: (data: boolean) => void;
}

const InputBar: React.FC<SearchBarProps> = ({ onSearch, className, isValue }) => {
  const [query, setQuery] = useState('');

//   TODO: update when backend api is ready
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch && onSearch(newQuery);
    newQuery && isValue ? isValue(true) : isValue && isValue(false);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className={`pl-4 border border-[#D9D9D9] rounded-md h-9 focus:outline-none focus:ring-gray-500 ${className}`}
      />
    </div>
  );
};

export default InputBar;
