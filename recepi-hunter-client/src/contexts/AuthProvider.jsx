/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../utils/firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { registerUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
