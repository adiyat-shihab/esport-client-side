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
    <div className="bg-[#120e20] h-screen text-white">
      <div className="px-[10rem] pt-20 flex justify-evenly ">
        <div className="space-y-8 w-[41rem]">
          <p className="font-bold text-3xl font-[Oswald]">Name: {name} </p>
          <hr />
          <p className="font-bold text-3xl font-[Oswald]">Fee: $.{price}</p>
          <hr />
          <p className="font-bold text-3xl font-[Oswald]">
            Match Duration: {match_duration}
          </p>
          <hr />
          <p className="font-bold text-3xl font-[Oswald]">
            Platform: {platform}
          </p>
        </div>
        <div>
          <img src={image} className="h-[22rem] w-[41rem]" alt="" />
        </div>
      </div>
      <div className="px-[10rem] pt-20 ">
        <p className="font-bold text-6xl mb-5">About This Game</p>
        <p className=" text-3xl">{details}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
