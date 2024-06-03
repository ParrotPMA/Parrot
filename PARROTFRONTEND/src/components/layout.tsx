// src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from './top-bar';
import { Sidebar } from './side-bar';

const Layout: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <div className="ml-64 mt-20 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
