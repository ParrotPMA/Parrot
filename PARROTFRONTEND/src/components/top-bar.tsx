// src/top-bar.tsx

import { useState } from 'react';
import trello from '../assets/images/trello.png';
import { DropDown } from './dropdown';
import SearchBar from './search-bar';
import { Button } from './button';
import bell from '../assets/images/bell.png';
import info from '../assets/images/info.png';
import user from '../assets/images/user.png';

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
    <div className='flex flex-col md:flex-row justify-between items-center w-full px-7 pt-6 bg-[#F5F5F5] h-12 pb-5'>
      <div className='flex items-center mb-4 md:mb-0'>
        <img src={trello} height={32} width={32} alt='trello-logo' className='pr-2'/>
        <p className='font-extrabold text-xl font-custom'>Trello</p>
        {dropdownLists.map((item: string, index: number) => (
          <DropDown title={item} key={index}/>
        ))}
        <Button className='w-20 font-normal h-8 ml-4' title='Create'/>
      </div>
      <div className='flex items-center space-x-4'>
        <SearchBar onSearch={handleSearch}/>
        <Button isIconButton image1={bell} className='px-1'/>
        <Button isIconButton image1={info} className='px-1'/>
        <Button isIconButton image1={user} className='px-1'/>
      </div>
    </div>
  )
}
