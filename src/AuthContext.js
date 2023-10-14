// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic
    setLoggedIn(true);
  };

//   const logout = () => {
//     // Perform logout logic
//     setLoggedIn(false);
//   };

  return (
    <AuthContext.Provider value={{ loggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
