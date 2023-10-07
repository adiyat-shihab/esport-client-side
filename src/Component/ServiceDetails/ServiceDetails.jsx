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
  const { name, price, short_description, image } = specificData;
  return (
    <div>
      <div>
        <div></div>
        <div>
          <img src={image} className="h-[33rem] w-[58rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
