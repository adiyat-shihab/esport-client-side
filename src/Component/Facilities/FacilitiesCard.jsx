const FacilitiesCard = ({ icon, name, description }) => {
  return (
    <div className="bg-[#221C3E] text-white space-y-5 w-[21.125rem] h-[15.3125rem] px-12 py-11">
      <img src={icon} className="mx-auto" alt="" />
      <h1 className="text-2xl text-center font-bold">{name}</h1>
      <p className="text-[16px] text-center font-light">{description}</p>
    </div>
  );
};

export default FacilitiesCard;
