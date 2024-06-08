import React from "react";
import { CiSearch } from "react-icons/ci";

const RightSection = () => {
  return (
    <div className="relative p-8 bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <div className="w-full h-full flex flex-col gap-8">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="enter city name"
          className="bg-transparent w-[80%] h-[48px] text-lg border-b focus:outline-none"
          autoComplete="off"
        />

        <h3 className="text-2xl tracking-wider">
          Weather Details:{" "}
          <span className="text-gray-400 font-bold font-michroma">London</span>
        </h3>

        <div className="flex flex-col gap-2">
          <p className="flex justify-between items-center text-lg text-gray-400">
            Cloudy <span className="text-2xl text-gray-200">28%</span>
          </p>
          <p className="flex justify-between items-center text-lg text-gray-400">
            Humidity <span className="text-2xl text-gray-200">28%</span>
          </p>
          <p className="flex justify-between items-center text-lg text-gray-400">
            Wind <span className="text-2xl text-gray-200">28%</span>
          </p>
          <p className="flex justify-between items-center text-lg text-gray-400">
            Rain <span className="text-2xl text-gray-200">28%</span>
          </p>
        </div>

        <hr className="border-gray-400 rounded-lg" />
      </div>

      <div className="absolute top-0 right-0 flex justify-center items-center w-[80px] h-[80px] bg-[#829f9a]">
        <CiSearch size={40} color="black" />
      </div>
    </div>
  );
};

export default RightSection;
