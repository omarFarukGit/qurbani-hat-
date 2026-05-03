import React from "react";

const Best_bread = () => {
  return (
    <div className=" max-w-7xl mx-auto  text-black my-5">
      <h1 className=" text-3xl font-bold text-blue-900">Top Breeds</h1>
      <p>
        Pick breed by age, health, and suitability for your family size instead
        of only price.
      </p>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className={"rounded-lg my-5 bg-white p-4"}>
          <h1 className=" text-2xl font-bold text-blue-900 ">Local Deshi</h1>
          <p>Budget-friendly choice with familiar local adaptation.</p>
        </div>
        <div className={"rounded-lg my-5 bg-white p-4"}>
          <h1 className=" text-2xl font-bold text-blue-900 ">Shahiwal Cross</h1>
          <p>Strong frame and balanced meat yield for medium/large families.</p>
        </div>
        <div className={"rounded-lg my-5 bg-white p-4"}>
          <h1 className=" text-2xl font-bold text-blue-900">Camel</h1>
          <p>Popular Cheml breed for quality meat and manageable size.</p>
        </div>
        <div className={"rounded-lg my-5 bg-white p-4"}>
          <h1 className=" text-2xl font-bold text-blue-900  ">Sheep</h1>
          <p>Tall, healthy sheep option for buyers wanting heavier weight.</p>
        </div>
      </div>
    </div>
  );
};

export default Best_bread;
