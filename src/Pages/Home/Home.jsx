import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Service from "../../Component/Service/Service";
import ChampionCup from "../../Component/ChampionCup/ChampionCup";
import Facilities from "../../Component/Facilities/Facilities";

const Home = () => {
  const loader = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Service loader={loader}></Service>
      <ChampionCup></ChampionCup>
      <Facilities></Facilities>
    </div>
  );
};

export default Home;
