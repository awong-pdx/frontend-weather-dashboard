import React, { createContext, useContext, useState } from 'react';

const userContext = createContext();
export const useUser = () => useContext(userContext);

export default function UserProvider(props) {
  const { users, children } = props;

  const [currentUser, setCurrentUser] = useState(null);

  const getUser = function getUserFromUsersData(email) {
    return users.filter((user) => user.id === email);
  };

  const login = function loginUser(email, password) {
    // assumes that emails are unique
    const matchedUsers = getUser(email);
    let success = false;

    if (matchedUsers.length > 0) {
      if (matchedUsers[0].password === password) {
        setCurrentUser(matchedUsers[0]);
        success = true;
      }
    }

    return success;
  };

  const logout = function logoutUser() {
    let success = false;

    if (currentUser) {
      setCurrentUser(null);
      success = true;
    }

    return success;
  };

  //   const loggedIn = function checkIfUserLoggedIn() {
  //     return currentUser !== null;
  //   };

  return (
    <userContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </userContext.Provider>
  );
}
