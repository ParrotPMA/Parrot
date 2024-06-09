import React, { createContext, useContext } from 'react';
import useStore from '../store/theme_store';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  getThemeStyles: (styles?: React.CSSProperties) => React.CSSProperties;
}

const themes: Record<'light' | 'dark', React.CSSProperties> = {
  light: {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
  },
  dark: {
    backgroundColor: '#1f2937',
    color: '#f3f4f6',
  },
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  getThemeStyles: () => ({}),
});

export const ThemeProvider: React.FC = ({ children }) => {
  const { theme } = useStore();

  const getThemeStyles = (styles: React.CSSProperties = {}): React.CSSProperties => {
    return {
      ...styles,
      ...themes[theme],
    };
  };

  return (
    <ThemeContext.Provider value={{ theme, getThemeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);