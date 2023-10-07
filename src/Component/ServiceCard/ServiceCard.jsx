const ServiceCard = ({ data }) => {
  const { name, price, short_description, image } = data;
  return (
    <div>
      <div className=" bg-[#221C3E] w-[34.0625rem]   shadow ">
        <div className="bg-[#3b326484] ">
          <img src={image} alt="" className="h-[14.9375rem] w-[34.0625rem]" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-white font-medium">
            {short_description}
          </p>
          <p className=" text-white text-xl font-semibold my-4">
            Entry Fee : ${price}
          </p>
          <button className="w-[6.5rem] rounded-md font-medium h-[3rem] bg-[#331e87] text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
