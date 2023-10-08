/* eslint-disable react/prop-types */
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = ({ loader }) => {
  console.log(loader);
  return (
    <div className="bg-[#100A2E] p-10 xl:px-48 2xl:px-60 pt-20  ">
      <h1 className="text-white text-2xl  text-center lg:text-6xl font-[Oswald]">
        Plan Your Epic Match
      </h1>
      <p className="text-center text-xl lg:text-3xl mt-10 text-white font-[Oswald] mb-10">
        Join One of those matches and earned your Amazing Reward
      </p>
      <div className=" grid grid-cols-1  xl:grid-cols-2 gap-y-10 justify-items-center">
        {loader.map((data) => (
          <ServiceCard data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
