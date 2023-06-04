import React, { useState } from 'react';
import { useInput } from '../../utilities/customHooks';
import { useUser } from '../UserProvider';
import { useTheme } from '../ThemeProvider';

export default function LoginBox({ handleClose, onLoginToggle = (f) => f }) {
  const { theme } = useTheme();
  const { currentUser, login, logout } = useUser();
  const [emailProp, resetEmail] = useInput('');
  const [passwordProp, resetPassword] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const { success, error } = login(emailProp.value, passwordProp.value);
    setErrorMessage(error);
    if (success) {
      resetEmail();
      resetPassword();
      onLoginToggle(true);
      handleClose();
    }
  };

  const handleLogoutSubmit = (event) => {
    event.preventDefault();

    logout();
    onLoginToggle(false);
  };

  const loginForm = (
    <form className="login-box" onSubmit={handleLoginSubmit}>
      <label htmlFor="email">
        <input
          className="form-control dashboard-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email:"
          value={emailProp.value}
          onChange={emailProp.onChange}
          required
        />
      </label>
      <label htmlFor="password">
        <input
          className="form-control dashboard-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password:"
          value={passwordProp.value}
          onChange={passwordProp.onChange}
          required
        />
        <p aria-live="polite">{errorMessage}</p>
      </label>
      <button className={`btn btn-${theme} dashboard-button`} type="submit">
        Submit
      </button>
    </form>
  );

  if (!currentUser) return loginForm;
  return (
    <form action="" className="logout-box" onSubmit={handleLogoutSubmit}>
      <div>{currentUser.email}</div>
      <button className={`btn btn-${theme}`} type="submit">
        Log Out
      </button>
    </form>
  );
}
