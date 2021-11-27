import { useMemo } from 'react';
import Nav from './components/nav/Nav';
import ThemeContext from './contexts/ThemeContext';
import Content from './components/content/Content';

import './App.css';
import { useState } from 'react';


export default function App() {
  const [theme, setTheme] = useState('light');

  const themeState = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={themeState}>
      <main>
        <Nav />
        <Content />
      </main>
    </ThemeContext.Provider>
  )
}
