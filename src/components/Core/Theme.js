import React, { useState, useEffect } from 'react';

export default function ThemeToggle(){
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-red-300 bg-gray-300 text-gray-800 rounded dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300"
    >
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </button>
  );
};
