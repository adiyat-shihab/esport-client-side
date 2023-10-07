import { Link } from "react-router-dom";
import "./Register.css";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
  const [validation, setValidation] = useState("");
  const { SignUp } = useContext(authContext);
  const [passvalidation, setPassValidation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setValidation("");
    setPassValidation("");
    if (password.length < 6) {
      setPassValidation("Password must be 6 character");
    } else if (password.length > 10) {
      setPassValidation("Password is not exceed over 10 character");
    } else {
      SignUp(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Register Successful redirecting to home page");
          setTimeout(() => {
            window.location.href = "/";
          }, 4000);
        })
        .catch((err) => {
          setValidation("Email Already in Use");
        });
    }
  };
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
          <form
            className="bg-[#FDF701] border border-black px-6 py-8  shadow-md text-black w-full"
            onSubmit={handleSubmit}
          >
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <input
              type="text"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="email"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="password"
              placeholder="Password"
              required
            />
            <p className="">{validation}</p>
            <p>{passvalidation}</p>
            <div className="flex justify-center mt-7">
              <button className="btn w-[9.5rem] h-[1.5rem] hover:bg-[#c9c12c] ">
                <input type="submit" value={"Register_"} />
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
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to={"/login"}
            >
              Log in
            </Link>
            .{" "}
            <div>
              <Toaster />
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

export default Register;
