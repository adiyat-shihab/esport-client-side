const ChampionCup = () => {
  return (
    <div>
      <div
        className="bg-cover bg-[#0000009a] bg-blend-overlay bg-no-repeat h-[94vh]"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Gxkv2qg/istockphoto-1357434465-612x612-remini-enhanced-1.jpg')",
        }}
      >
        <div className=" h-[94vh] flex flex-col justify-center items-center gap-10">
          <p className=" text-center font-semibold text-white text-7xl font-[Oswald]  ">
            Get Your Cup Show This To The World
          </p>
          <p className="font-semibold text-5xl font-[Oswald] text-white">
            Earn Your Biggest Reward
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChampionCup;
