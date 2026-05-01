import Banner from "@/components/Banner";
import FeaturedAnimal from "@/components/FeaturedAnimal";
import React from "react";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <Banner />
      <FeaturedAnimal />
    </div>
  );
};

export default Home;
