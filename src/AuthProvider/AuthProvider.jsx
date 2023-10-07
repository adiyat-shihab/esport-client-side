import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const info = {
    SignUp,
    user,
  };
  return (
    <authContext.Provider value={info}>
      {children}{" "}
      <div>
        <Toaster />
      </div>
    </authContext.Provider>
  );
};

export default AuthProvider;
