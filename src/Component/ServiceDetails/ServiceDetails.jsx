import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const loader = useLoaderData();
  const params = useParams();
  console.log(loader);
  console.log(params);
  const { id } = params;
  const idString = parseInt(id);
  const specificData = loader.find((item) => item.id === idString);
  console.log(specificData);
  const { name, price, details, image, match_duration, platform } =
    specificData;
  return (
    <div className="bg-[#120e20] text-white pb-16">
      <div className="xl:px-[10rem] pt-20  flex flex-col xl:flex-row justify-evenly ">
        <div className="space-y-8 pb-6 xl:w-[41rem] xl:text-left text-center">
          <p className="font-bold text-xl xl:border-b border-white  font-[Oswald]">
            Name: {name}{" "}
          </p>

          <p className="font-bold text-xl font-[Oswald] xl:border-b border-white">
            Fee: $.{price}
          </p>

          <p className="font-bold text-xl xl:border-b border-white font-[Oswald]">
            Match Duration: {match_duration}
          </p>

          <p className="font-bold text-xl xl:border-b border-white font-[Oswald]">
            Platform: {platform}
          </p>
        </div>
        <div>
          <img src={image} className="h-[22rem] w-[41rem] mx-auto" alt="" />
        </div>
      </div>
      <div className="xl:px-[10rem] px-4 pt-20 ">
        <p className="font-bold text-3xl xl:text-6xl mb-5">About This Game</p>
        <p className=" lg:text-3xl">{details}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
