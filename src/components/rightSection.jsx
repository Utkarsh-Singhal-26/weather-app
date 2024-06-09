import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

import { checkRain } from "../utils";

const RightSection = ({ weather, searchWeather }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchWeather(search);
    }
  };

  return (
    <div className="relative p-8 bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <div className="w-full h-full flex flex-col gap-8">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="enter city name"
          className="bg-transparent w-[80%] h-[48px] text-lg border-b focus:outline-none"
          autoComplete="off"
        />

        <h3 className="text-2xl tracking-wider">
          Weather Details:{" "}
          <span className="text-gray-400 font-bold font-michroma">
            {weather ? weather.name : "London"}
          </span>
        </h3>

        <div className="flex flex-col gap-2">
          <p className="flex justify-between items-center text-lg text-gray-400">
            Cloudy{" "}
            <span className="text-2xl text-gray-200">
              {weather && weather.clouds ? weather.clouds.all : "86"}%
            </span>
          </p>
          <p className="flex justify-between items-center text-lg text-gray-400">
            Humidity{" "}
            <span className="text-2xl text-gray-200">
              {weather && weather.main ? weather.main.humidity : "62"}%
            </span>
          </p>
          <p className="flex justify-between items-center text-lg text-gray-400">
            Wind{" "}
            <span className="text-2xl text-gray-200">
              {weather && weather.wind ? weather.wind.speed : "8"} km/h
            </span>
          </p>
          <p className="flex justify-between items-center text-lg text-gray-400">
            Rain{" "}
            <span className="text-2xl text-gray-200">
              {weather ? checkRain(weather) : "8"} mm
            </span>
          </p>
        </div>

        <hr className="border-gray-400 rounded-lg" />
      </div>

      <div
        className="absolute top-0 right-0 flex justify-center items-center w-[80px] h-[80px] bg-[#829f9a] cursor-pointer"
        onClick={() => searchWeather(search)}
      >
        <CiSearch size={40} color="black" />
      </div>
    </div>
  );
};

export default RightSection;
