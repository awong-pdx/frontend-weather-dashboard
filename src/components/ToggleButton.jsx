import React from 'react';
// import { Button } from 'react-bootstrap';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { useTheme } from './ThemeProvider';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  // const className = `row ${theme}`;
  // const btnVariant = `${theme}`;
  const btnToggleDarkOn = <MoonFill size={32} />;
  const btnToggleDarkOff = <SunFill size={32} />;
  const btnIcon = theme === 'dark' ? btnToggleDarkOn : btnToggleDarkOff;
  const btnText = theme === 'dark' ? `  Dark` : `  Light`;

  const handleClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <button
      type="button"
      className={`btn btn-${theme}`}
      onClick={() => {
        handleClick();
      }}
    >
      {btnIcon}
      {btnText}
    </button>
  );
}
