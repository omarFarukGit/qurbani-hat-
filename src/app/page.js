import Banner from "@/components/Banner";
import FeaturedAnimal from "@/components/FeaturedAnimal";
import Kurbani from "@/components/Kurbani";
import React from "react";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <Banner />
      <FeaturedAnimal />
      <Kurbani />
    </div>
  );
};

export default Home;
