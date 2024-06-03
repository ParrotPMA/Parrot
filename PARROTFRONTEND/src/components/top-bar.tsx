// src/top-bar.tsx

import React, { useState } from 'react';
import trello from '../assets/images/trello-icon.png';
import { DropDown } from './dropdown';
import SearchBar from './search-bar';
import { Button } from './button';
import workspacePremium from '../assets/images/workspace_premium.png';

const dropdownLists: string[] = ["Workspace", "Recent", "Starred", "Templates"];

export const TopBar = () => {
  const [, setSearchResults] = useState<string[]>([]);

  // TODO: Update when api is available or backend is ready
  const handleSearch = (query: string): void => {
    // For now, just logging the query. In a real app, you would filter data or call an API.
    // Example: Filter some mock data
    const mockData = ["Workspace 1", "Workspace 2", "Recent Project", "Starred Item", "Template 1"];
    const filteredResults = mockData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(filteredResults);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full px-7 pt-6'>
      <div className='flex items-center mb-4 md:mb-0'>
        <img src={trello} height={40} width={40} alt='trello-logo' className='pr-2'/>
        <p className='font-bold text-3xl text-[#007AC0] font-serif'>Trello</p>
        {dropdownLists.map((item: string, index: number) => (
          <DropDown title={item} key={index}/>
        ))}
      </div>
      <div className='flex items-center space-x-4'>
        <SearchBar onSearch={handleSearch}/>
        <Button className='w-20' title='Create' />
        <Button className='w-36' title='Try Premium' image={workspacePremium} />
      </div>
    </div>
  )
}
