import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div
      className="bg-[#090329] bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images3.alphacoders.com/133/1333016.jpeg')",
      }}
    >
      <div className="bg-grey-lighter min-h-screen flex flex-col font-[Oswald] ">
        <div className="container max-w-sm ml-auto flex-1 flex flex-col mr-[23rem]  items-center justify-center px-2">
          <div className="bg-[#FDF701] border border-black px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="password"
              placeholder="Password"
            />

            <div className="flex justify-center">
              <button className="btn w-[9.5rem] h-[1.5rem] hover:bg-[#c9c12c] ">
                Register_
              </button>
            </div>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to={"/login"}
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
