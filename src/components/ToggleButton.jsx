import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  //   toggleTheme('dark');
  const className = `row ${theme}`;

  const handleClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        Toggle
      </button>
      <span>Hello</span>
    </div>
  );
}
