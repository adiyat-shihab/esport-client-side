import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  return (
    <div className="bg-[#100A2E] p-10 px-60 h-[93vh]">
      <h1 className="text-white  text-center text-6xl">Plan Your Epic Match</h1>
      <p className="text-center text-3xl mt-10 text-white">
        Join One of those matches and earned your reward
      </p>
      <div>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default Service;
