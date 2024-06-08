import React from "react";
import { IoRainy } from "react-icons/io5";

const LeftSection = () => {
  return (
    <div className="flex flex-col justify-between p-20">
      <h1 className="font-michroma text-lg font-bold tracking-wider">
        the.weather
      </h1>
      
      <div className="flex gap-4 items-end">
        <h2 className="text-9xl">18°</h2>
        <div>
          <h2 className="text-6xl font-bold">London</h2>
          <p className="text-2xl">06:09 - Sunday, 6 Oct 19</p>
        </div>
        <div className="flex flex-col items-center">
          <IoRainy size={80} />
          <p className="text-xl">Rainy</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
