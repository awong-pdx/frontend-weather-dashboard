import React, { useState } from 'react';
import { useInput } from '../../utilities/customHooks';
import { useUser } from '../UserProvider';

export default function LoginBox({ onLoginToggle = (f) => f }) {
  const { currentUser, login, logout } = useUser();
  const [emailProp, resetEmail] = useInput('');
  const [passwordProp, resetPassword] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (login(emailProp.value, passwordProp.value)) {
      resetEmail();
      resetPassword();
      onLoginToggle(true);
    } else {
      // TODO
      setErrorMessage('Error');
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
        Email:
        <input
          type="email"
          name=""
          id="email"
          value={emailProp.value}
          onChange={emailProp.onChange}
          aria-required
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name=""
          id="password"
          value={passwordProp.value}
          onChange={passwordProp.onChange}
          aria-required
        />
        <p>{errorMessage}</p>
      </label>
      <button type="submit">Submit</button>
    </form>
  );

  // const logoutForm = (
  // );

  if (!currentUser) return loginForm;
  return (
    <form action="" className="logout-box" onSubmit={handleLogoutSubmit}>
      <div>{currentUser.email}</div>
      <button type="submit">Log Out</button>
    </form>
  );
}
