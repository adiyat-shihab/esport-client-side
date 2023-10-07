import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const SingOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user);
        setLoading(false);
        // ...
      } else {
        setUser(null);
      }
    });
  }, []);
  const info = {
    SignUp,
    user,
    SignIn,
    SingOut,
    loading,
  };
  return <authContext.Provider value={info}>{children} </authContext.Provider>;
};

export default AuthProvider;
