import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { SignIn, googleSignIn } = useContext(authContext);
  const [see, setSee] = useState(false);
  const [validation, setValidation] = useState("");
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Register Successful redirecting to home page");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setValidation("Email/Password doesn't match");
          console.log(error);
        }
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setValidation("");
    SignIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Register Successful redirecting to home page");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setValidation("Email/Password doesn't match");
          console.log(error);
        }
      });
    console.log(email, password);
  };
  return (
    <div
      className="bg-[#090329] z-0 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images3.alphacoders.com/133/1333016.jpeg')",
      }}
    >
      <div className="bg-grey-lighter min-h-screen flex flex-col font-[Oswald] ">
        <div className="container max-w-sm ml-auto flex-1 flex flex-col mr-[23rem]  items-center justify-center px-2">
          <form
            onSubmit={handleSignIn}
            className="bg-[#FDF701]  border border-black px-6 py-8  shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Login</h1>

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
            <p>{validation}</p>

            <div className="flex justify-center mt-7 gap-6">
              <button
                onClick={handleGoogleLogin}
                className="btn-cyber  w-[9.5rem] h-[1.5rem] "
              >
                google login
              </button>
              <button className="btn-cyber w-[9.5rem] h-[1.5rem] hover:bg-[#c9c12c] ">
                <input type="submit" value={"Login_"} />
              </button>
            </div>
            <div className="text-center text-sm text-grey-dark mt-4">
              <div className="text-grey-dark mt-6">
                Not an user?
                <Link
                  className="no-underline mb-3 border-b border-blue text-blue"
                  to={"/register"}
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
