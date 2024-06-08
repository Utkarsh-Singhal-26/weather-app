import React from "react";
import { CiSearch } from "react-icons/ci";

const RightSection = () => {
  return (
    <div className="relative p-8 bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <div className="w-full h-full">
        <input type="text" name="search" id="search" placeholder="enter city name" className="bg-transparent w-[80%] h-[48px] text-lg border-b focus:outline-none" autoComplete="off" />
      </div>

      <div className="absolute top-0 right-0 flex justify-center items-center w-[80px] h-[80px] bg-[#829f9a]">
        <CiSearch size={40} color="black" />
      </div>
    </div>
  );
};

export default RightSection;
