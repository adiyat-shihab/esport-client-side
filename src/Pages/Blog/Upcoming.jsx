const Upcoming = ({ image, name }) => {
  return (
    <div>
      <div className="card w-[26.25rem] bg-[#221C3E] shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-[Oswald]">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
