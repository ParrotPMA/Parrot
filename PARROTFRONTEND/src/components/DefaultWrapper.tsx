import React from 'react'
import { useTheme } from '../context/ThemeContext'
import ThemeSwitch from './ThemeSwitch';

const DefaultWrapper: React.FC = ( {children} ) => {
  const { getThemeStyles } = useTheme();
  return (
    <div
      className="p-4 rounded-md h-screen w-screen"
      style={getThemeStyles({ backgroundColor: 'inherit' })}
    >
      <div className="flex justify-end p-4">
        <ThemeSwitch />
      </div>
      {children}
    </div>
  );
};

export default DefaultWrapper