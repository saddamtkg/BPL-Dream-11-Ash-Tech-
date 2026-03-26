import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const themeName = 'dark';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? themeName : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  // এখান থেকে প্রয়োজনীয় সবকিছু রিটার্ন করুন
  return { theme, toggleTheme, themeName };
};
