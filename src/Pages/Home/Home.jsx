import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Service from "../../Component/Service/Service";

const Home = () => {
  const loader = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Service loader={loader}></Service>
    </div>
  );
};

export default Home;
