import React from 'react';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { useTheme } from '../ThemeProvider';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const iconToggleDarkOn = <MoonFill size={32} />;
  const iconToggleDarkOff = <SunFill size={32} />;
  const btnIcon = theme === 'dark' ? iconToggleDarkOn : iconToggleDarkOff;
  const btnText = theme === 'dark' ? `  Dark` : `  Light`;

  const handleClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={`toggle-button btn btn-${theme}`}
      onClick={() => {
        handleClick();
      }}
    >
      {btnIcon}
      {btnText}
    </button>
  );
}
