import React, { createContext, useContext, useState } from 'react';

const userContext = createContext();
export const useUser = () => useContext(userContext);

export default function UserProvider(props) {
  const { users, children } = props;

  const [currentUser, setCurrentUser] = useState(null);

  const getUser = function getUserFromUsersData(email) {
    return users.filter((user) => user.email === email);
  };

  const login = function loginUser(email, password) {
    // assumes that emails are unique
    let success = false;
    let error = '';

    const matchedUsers = getUser(email);
    if (matchedUsers.length > 0) {
      if (matchedUsers[0].password === password) {
        setCurrentUser(matchedUsers[0]);
        success = true;
      } else {
        error = 'The password for that user is incorrect.';
      }
    } else {
      error = 'A user with that email does not exist.';
    }

    return { success, error };
  };

  const logout = function logoutUser() {
    let success = false;

    if (currentUser) {
      setCurrentUser(null);
      success = true;
    }

    return success;
  };

  return (
    <userContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </userContext.Provider>
  );
}
