import Banner from "@/components/Banner";
import Best_bread from "@/components/Best_bread";
import Bottom from "@/components/Bottom";
import FeaturedAnimal from "@/components/FeaturedAnimal";
import Kurbani from "@/components/Kurbani";
import React from "react";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <Banner />
      <FeaturedAnimal />
      <Best_bread />
      <Kurbani />
      <Bottom />
    </div>
  );
};

export default Home;
