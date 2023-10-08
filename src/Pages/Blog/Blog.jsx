import Upcoming from "./Upcoming";

const Blog = () => {
  return (
    <div className="bg-[#100A2E] p-10 xl:px-60 pt-20 h-auto ">
      <h1 className="text-white  text-center text-6xl font-[Oswald]">
        Upcoming Game For Tournament
      </h1>
      <p className="text-center text-3xl mt-10 text-white font-[Oswald] mb-10">
        You need to wait for participate this game
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 justify-items-center">
        <Upcoming
          image={
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg"
          }
          name={"Apex Legend"}
        ></Upcoming>
        <Upcoming
          image={"https://i.ibb.co/LdGWwY4/Far-Cry-6-Demo-Header-1920x1080.jpg"}
          name={"Far Cry"}
        ></Upcoming>
      </div>
    </div>
  );
};

export default Blog;
