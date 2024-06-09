import React, { useEffect, useState } from "react";
import axios from "axios";

import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";

import DefaultImage from "./assets/images/default.jpg";
import { changeBackground } from "./utils";

const App = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocationName(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const fetchLocationName = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const {
        address: { state },
      } = data;
      searchWeather(state);
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  const searchWeather = async (city) => {
    const api_key = import.meta.env.VITE_WEATHER_API;
    const url_base = "https://api.openweathermap.org/data/2.5";

    try {
      const weatherData = await axios.get(
        `${url_base}/weather?q=${city}&units=metric&appid=${api_key}`
      );
      setWeather(weatherData.data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <main
      className="w-screen h-screen m-0 p-0 font-syne text-white grid max-md:grid-rows-[40%_1fr] md:grid-cols-[1fr_30%] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${
          weather && weather.weather
            ? changeBackground(weather.weather[0].id)
            : DefaultImage
        })`,
      }}
    >
      <LeftSection weather={weather} />
      <RightSection weather={weather} searchWeather={searchWeather} />
    </main>
  );
};

export default App;
