// src/components/Layout.tsx

import React from 'react';
import { TopBar } from './top-bar';
import { Sidebar } from './side-bar';
import { RecentlyViewed } from './recently-viewed';
import { Workspace } from './workspace';

const Layout: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <div className="flex items-center justify-center ">
        <Workspace />
      </div>
    </div>
  );
};

export default Layout;
