"use client";

import AnimalCard from "@/components/AnimalCard";
import { useEffect, useState } from "react";
import { getAllAnimalsData } from "@/lib/data";

const AllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [sortType, setSortType] = useState("");

  // data load
  useEffect(() => {
    const loadData = async () => {
      const data = await getAllAnimalsData();
      setAnimals(data);
    };
    loadData();
  }, []);

  // sorting logic
  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortType === "low") return a.price - b.price;
    if (sortType === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto mb-4">
      <div className="flex justify-between items-center my-10">
        <p>Animals</p>

        <select
          onChange={(e) => setSortType(e.target.value)}
          className="select text-black border px-3 py-2 rounded"
        >
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
