import React from 'react';
import board from '../assets/images/board.png'
import home from '../assets/images/home.png'
import template from '../assets/images/template.png'


interface SidebarItemProps {
  iconSrc: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ iconSrc, label }) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
      <img src={iconSrc} alt={`${label} icon`} className="mr-3 w-6 h-6" />
      <div>{label}</div>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  // Import your local images
  // const boardsIcon = require('../assets/images/board.png');
  // const templateIcon = require('../assets/images/template-icon.png');
  // const homeIcon = require('../assets/images/home-icon.png');
  // const notificationsIcon = require('../assets/images/notifications-icon.png');
  // const messagesIcon = require('../assets/images/messages-icon.png');

  return (
    <div className="w-64 h-screen bg-gray-100 fixed top-0 left-0 flex flex-col shadow-lg mt-20 pt-10">
      <SidebarItem iconSrc={board} label="Boards" />
      <SidebarItem iconSrc={template} label="Template" />
      <SidebarItem iconSrc={home} label="Home" />

      {/* <SidebarItem iconSrc={templateIcon} label="Template" />
      <SidebarItem iconSrc={homeIcon} label="Home" />
      <SidebarItem iconSrc={notificationsIcon} label="Notifications" />
      <SidebarItem iconSrc={messagesIcon} label="Messages" /> */}
    </div>
  );
};
