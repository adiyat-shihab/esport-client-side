import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div
        className={
          "flex justify-center items-center h-screen w-screen bg-cover bg-no-repeat"
        }
        style={{
          backgroundImage:
            "url('https://cdn.mos.cms.futurecdn.net/dovWJzHSBuoTDP2ewvZaaX.jpg')",
        }}
      >
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 w-screen \ py-24 items-center flex justify-between flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="">
              <h1 className="my-2  font-bold text-3xl bg-[#FDEE06] text-black w-fit font-[Oswald]">
                Looks like You enter an non existing page
              </h1>
              <p className="my-2 text-black w-fit bg-[#FDEE06] font-[oswald] ">
                Go To Home Page
              </p>
              <Link to={"/"}>
                {" "}
                <button className=" mt-10 sm:w-full lg:w-[9.5rem] h-[1.5rem] my-2 border rounded md py-4 px-8 text-center text-white btn-cyber  focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
                  Home
                </button>
              </Link>
            </div>
          </div>
          <div className={"lg:w-[35rem]"}></div>
        </div>
      </div>
    </div>
  );
};

export default Error;
