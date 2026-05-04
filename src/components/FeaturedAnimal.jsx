import { getAllAnimalsData } from "@/lib/data";
import React from "react";
import AnimalCard from "./AnimalCard";

const FeaturedAnimal = async () => {
  const animals = await getAllAnimalsData();
  const FeturedAnimals = animals.slice(4, 8);
  console.log(FeturedAnimals);

  return (
    <div className="mt-6 max-w-7xl mx-auto">
      <p className=" text-3xl px-4 my-4 text-center">Fetured Animal</p>
      <div
        
        className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "
      >
        {FeturedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimal;
