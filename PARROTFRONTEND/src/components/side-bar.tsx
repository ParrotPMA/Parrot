// src/components/Sidebar.tsx

import React, { useState } from 'react';
import board from '../assets/images/board.png';
import home from '../assets/images/home.png';
import template from '../assets/images/template.png';
import { SidebarWorkspace } from './sidebar-workspace';

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ iconSrc, label, isSelected, onClick }) => {
  return (
    <div className={`flex items-center p-4 cursor-pointer rounded-lg h-10 text-sm font-medium font-custom hover:bg-[#738496] hover:bg-opacity-20 w-60 h-9${
      isSelected ? ' bg-opacity-20 bg-[#0c66e4] font-medium font-custom' : ''
    }`} onClick={onClick}
    >
      <img src={iconSrc} alt={`${label} icon`} className="mr-3 w-6 h-6" />
      <div>{label}</div>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Boards');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="h-screen fixed top-0 left-[14%] flex flex-col pt-1.5 mt-20">
      <SidebarItem iconSrc={board} label="Boards" isSelected={selectedTab === 'Boards'}
        onClick={() => handleTabClick('Boards')}/>
      <SidebarItem iconSrc={template} label="Template" isSelected={selectedTab === 'Template'}
        onClick={() => handleTabClick('Template')}/>
      <SidebarItem iconSrc={home} label="Home" isSelected={selectedTab === 'Home'}
        onClick={() => handleTabClick('Home')}/>
        <hr className='bg-gray-200 mt-2'/>
        <SidebarWorkspace title={"Workspaces"} className={'pt-4 text-xs font-semibold'}/>
    </div>
  );
};
