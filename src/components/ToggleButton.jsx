import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from './ThemeProvider';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const className = `row ${theme}`;
  const btnVariant = `${theme}`;

  const handleClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className={className}>
      <Button
        variant={btnVariant}
        onClick={() => {
          handleClick();
        }}
      >
        Toggle
      </Button>

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
