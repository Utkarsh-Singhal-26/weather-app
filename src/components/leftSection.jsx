import React from "react";

import defaultIcon from "../assets/icons/default.svg";
import { displayDate, displayIcon } from "../utils";

const LeftSection = ({ weather }) => {
  return (
    <div className="flex flex-col justify-between p-4 md:p-20">
      <h1 className="font-michroma text-lg font-bold tracking-wider">
        the.weather
      </h1>

      {weather ? (
        <div className="flex gap-4 items-end">
          <h2 className="text-6xl md:text-5xl lg:text-8xl xl:text-9xl">
            {Math.round(weather?.main?.temp ?? "00")}°
          </h2>
          <div>
            <h2 className="lg:text-4xl xl:text-6xl font-bold">
              {weather ? weather.name : "London"}
            </h2>
            <p className="lg:text-2xl">{displayDate()}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="max-md:w-[36px] md:w-[40px] lg:w-[80px] max-md:h-[36px] md:h-[40px] lg:h-[80px]"
              src={
                weather && weather.weather
                  ? displayIcon(weather.weather[0].id)
                  : defaultIcon
              }
              alt="Weather Icon"
            />
            <p className="lg:text-xl">
              {weather && weather.weather ? weather.weather[0].main : "-"}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-4xl">Loading...</div>
      )}
    </div>
  );
};

export default LeftSection;
