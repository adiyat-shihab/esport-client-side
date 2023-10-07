import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, SingOut } = useContext(authContext);
  const hanldeSignOut = () => {
    SingOut()
      .then(() => {
        toast.success("sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sticky top-0">
      <nav className="bg-[#221C3E]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img
              src="https://www.lifewire.com/thmb/fVnnxHsm-TWvbPqlDejXVMZPbL0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/E3Logo_Color_RGB_white_tm-de52c7246bac42b09b26097c22047ddf.png"
              className="h-8 mr-3"
              alt=""
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8  ">
              <NavLink to={"/"} className={"text-white"}>
                Home{" "}
              </NavLink>
              <li className="text-white cursor-pointer">Sevice</li>
              <li className="text-white cursor-pointer">Blog</li>
              {user ? (
                <button onClick={hanldeSignOut} className="text-white">
                  Sign Out
                </button>
              ) : (
                <Link to={"/register"} className="text-white cursor-pointer">
                  Sign Up
                </Link>
              )}
            </ul>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
