import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'blue' : 'light'));
  };
  const themevalue ={ 
    theme,
    toggleTheme 
}
  return (
    <ThemeContext.Provider value={themevalue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };