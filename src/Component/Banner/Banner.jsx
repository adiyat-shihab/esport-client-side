const Banner = () => {
  return (
    <>
      <div
        className="bg-cover bg-[#453a71] bg-blend-overlay bg-no-repeat h-[94vh]"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/MgM4PS3/pexels-yan-krukau-9072388-remini-enhanced.png')",
        }}
      >
        <div className=" h-[94vh] flex flex-col justify-center items-center gap-10">
          <p className=" text-center font-semibold text-white text-7xl font-[Oswald]  ">
            Play The Game That You <br /> Play Never Before
          </p>
          <p className="font-semibold text-4xl font-[Oswald] text-white">
            Join Out Tournament. KickStart Your Career
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
