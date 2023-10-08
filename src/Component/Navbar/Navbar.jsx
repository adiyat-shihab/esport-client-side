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
    <div className="navbar sticky top-0 py-6 z-10 bg-[#100A2E] md:px-4 xl:px-20">
      <div className="navbar-start">
        <Link to={"/"} className="flex items-center">
          <img
            src="https://www.lifewire.com/thmb/fVnnxHsm-TWvbPqlDejXVMZPbL0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/E3Logo_Color_RGB_white_tm-de52c7246bac42b09b26097c22047ddf.png"
            className="h-8 mr-3"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-10 px-1 text-white">
          <li>
            <Link to={"/"} className="hover:text-white ">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/upcoming/games/tournament"}>Upcoming Games</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6 text-white">
        <p>{user?.displayName}</p>
        <div className="avatar bg-[#100A2E]">
          <div className="w-12 rounded-full bg-[#100A2E]">
            {user?.photoURL ? <img src={user?.photoURL} alt="" /> : ""}
          </div>
        </div>
        <div className="dropdown  dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden m-1">
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
            className="dropdown-content text-white z-[1] bg-[#221C3E] space-y-4 p-4  menu  shadow rounded-box w-52"
          >
            <p className="text-base">
              <Link to={"/"}>Home</Link>
            </p>

            <p className="text-base">
              {" "}
              <Link to={"/faq"}>FAQ</Link>
            </p>

            <p className="text-base">
              {" "}
              <Link to={"/upcoming/games/tournament"}>Upcoming Games</Link>
            </p>
            {user ? (
              <p onClick={hanldeSignOut} className="text-base text-white">
                Sign Out
              </p>
            ) : (
              <p className="text-base text-white">
                {" "}
                <Link to={"/register"}>Sign Up</Link>
              </p>
            )}
          </ul>
        </div>
        <div className=" hidden md:block">
          {user ? (
            <button
              onClick={hanldeSignOut}
              className="btn bg-[#221C3E] flex items-center justify-center  border-none hover:bg-[#221C3E] text-white"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={"/register"}
              className="btn  bg-[#221C3E] flex justify-center items-center  text-white hover:bg-[#221C3E] border-none"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
