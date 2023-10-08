import { Link } from "react-router-dom";
import "./Register.css";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
  const [validation, setValidation] = useState("");
  const [see, setSee] = useState(false);
  const { SignUp, updateProfiles, user, googleSignIn } =
    useContext(authContext);
  console.log(user);
  const [passvalidation, setPassValidation] = useState("");

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => console.log(result.user));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.fullname.value;
    const photo = e.target.photo.value;
    setValidation("");
    setPassValidation("");
    if (password.length < 6) {
      setPassValidation("Password must be 6 character");
    } else if (password.length > 15) {
      setPassValidation("Password is not exceed over 15 character");
    } else if (!/[A-Z]/.test(password)) {
      setPassValidation("Password must need atleast one Capital Letter");
    } else if (!/\d/.test(password)) {
      setPassValidation("Password must need atleast one number");
    } else if (!/[@$!%*?&]/.test(password)) {
      setPassValidation("Password must need atleast one special character");
    } else {
      SignUp(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Register  Successful redirecting to Home page");
          updateProfiles(name, photo);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
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

            <div className="relative">
              {see ? (
                <img
                  className="absolute right-1 "
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/invisible.png"
                  alt="invisible"
                  onClick={() => setSee(!see)}
                />
              ) : (
                <img
                  className="absolute right-1"
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
                  alt="visible--v1"
                  onClick={() => setSee(!see)}
                />
              )}
              <input
                type={see ? "text" : "password"}
                className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
                name="password"
                placeholder="password"
                required
              />{" "}
            </div>
            <input
              type="text"
              className="block  bg-[#FDF701] placeholder:text-black border-b-black border-b-2 w-full outline-none p-3  mb-4"
              name="photo"
              placeholder="Upload your photo Url"
            />
            <p className="">{validation}</p>
            <p>{passvalidation}</p>
            <div className="flex justify-center gap-6 mt-7">
              <button
                onClick={handleGoogleLogin}
                className="btn-cyber  w-[9.5rem] h-[1.5rem] "
              >
                google login
              </button>

              <button className="btn-cyber w-[9.5rem] h-[1.5rem] hover:bg-[#c9c12c] ">
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
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Register;
