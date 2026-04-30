import { getAllAnimalsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const animals = await getAllAnimalsData();
  const animal = animals.find((a) => a.id == id);
  return (
    animal && (
      <div className="max-w-6xl w-full px-6 h-[80vh] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3"></div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <Image
                src={animal.image}
                width={500}
                height={500}
                alt="Selected product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{animal.name}</h1>

            <div className="flex items-center gap-0.5 mt-1"></div>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: ${animal.price}
              </p>
              <p className="text-2xl font-medium flex items-center">
                Price: <TbCurrencyTaka />
                {animal.price}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              <li>{animal.details}</li>
            </ul>

            <div className="flex items-center mt-10 gap-4 text-base">
              <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                Add to Cart
              </button>
              <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AnimalDetails;
