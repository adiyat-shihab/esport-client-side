import FacilitiesCard from "./FacilitiesCard";
const Facilities = () => {
  return (
    <div className="bg-[#100A2E] lg:px-44 py-28">
      <h1 className=" text-center text-5xl text-white mb-20">
        Facilities We Offer
      </h1>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10">
        <FacilitiesCard
          icon={
            "https://template-kit1.evonicmedia.com/layout32/wp-content/uploads/2023/08/podium_adobe_express-1.png"
          }
          name={"Esoprt Completion"}
          description={"Discover our Esports Oasis! 🎮🏆   "}
        ></FacilitiesCard>
        <FacilitiesCard
          icon={
            "https://template-kit1.evonicmedia.com/layout32/wp-content/uploads/2023/08/Group-1204.png"
          }
          name={"Latest Gaming Tech"}
          description={"where passion meets technology! "}
        ></FacilitiesCard>
        <FacilitiesCard
          icon={
            "https://template-kit1.evonicmedia.com/layout32/wp-content/uploads/2023/08/chair-3_adobe_express-1.png"
          }
          name={"Comfortable Seat"}
          description={"Enjoy the Relif   "}
        ></FacilitiesCard>
      </div>
    </div>
  );
};

export default Facilities;
