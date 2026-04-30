import { getAllAnimalsData } from "@/lib/data";
import React from "react";
import AnimalCard from "./AnimalCard";

const FeaturedAnimal = async () => {
  const animals = await getAllAnimalsData();
  const FeturedAnimals = animals.slice(10, 14);
  console.log(FeturedAnimals);

  return (
    <div className=" grid grid-cols-4 gap-3 mt-6">
      {FeturedAnimals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default FeaturedAnimal;
