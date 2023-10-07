import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        toast.success("account create success");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
