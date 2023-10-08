import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
