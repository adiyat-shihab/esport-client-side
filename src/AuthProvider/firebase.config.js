import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzHfi4MCf2CqBAaM8MCVE7LOOvG3_ZBEE",
  authDomain: "assignment9-ed2dc.firebaseapp.com",
  projectId: "assignment9-ed2dc",
  storageBucket: "assignment9-ed2dc.appspot.com",
  messagingSenderId: "101265400783",
  appId: "1:101265400783:web:262b4d9334aba7209ee8ba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
