import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";
import Details from "./Details";

const Home = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <Helmet>
        <title> Travel Guru | Home </title>
      </Helmet>
      <div className="flex justify-between border gap-5">
        <div className="border w-full">
          {loadData?.map((data) => (
            <Details key={data.id} data={data}></Details>
          ))}
        </div>
        <div className="border w-full">
          {loadData?.map((data) => (
            <Carousel key={data.id} data={data}></Carousel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
