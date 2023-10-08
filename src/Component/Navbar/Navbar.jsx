import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, SingOut } = useContext(authContext);
  console.log(user);
  const hanldeSignOut = () => {
    SingOut()
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-[#100A2E]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center">
          <img
            src="https://www.lifewire.com/thmb/fVnnxHsm-TWvbPqlDejXVMZPbL0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/E3Logo_Color_RGB_white_tm-de52c7246bac42b09b26097c22047ddf.png"
            className="h-8 mr-3"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6 text-white">
        <p>{user?.displayName}</p>
        <div className="avatar bg-[#100A2E]">
          <div className="w-16 rounded-full bg-[#100A2E]">
            {user?.photoURL ? <img src={user?.photoURL} alt="" /> : ""}
          </div>
        </div>
        {user ? (
          <button onClick={hanldeSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to={"/register"} className="btn">
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
