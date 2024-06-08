// IMAGES
import thunderstormImage from "./assets/images/thunderstorm.jpg";
import drizzleImage from "./assets/images/drizzle.jpg";
import rainImage from "./assets/images/rain.jpg";
import snowImage from "./assets/images/snow.jpg";
import atmosphereImage from "./assets/images/atmosphere.jpg";
import clearImage from "./assets/images/clear.jpg";
import cloudsImage from "./assets/images/clouds.jpg";
import defaultImage from "./assets/images/default.jpg";

// ICONS
import thunderstormIcon from "./assets/icons/thunderstorm.svg";
import drizzleIcon from "./assets/icons/drizzle.svg";
import rainIcon from "./assets/icons/rain.svg";
import snowIcon from "./assets/icons/snow.svg";
import atmosphereIcon from "./assets/icons/atmosphere.svg";
import clearIcon from "./assets/icons/clear.svg";
import cloudsIcon from "./assets/icons/clouds.svg";
import defaultIcon from "./assets/icons/default.svg";

export function changeBackground(id) {
  if (id >= 200 && id <= 232) {
    return thunderstormImage;
  } else if (id >= 300 && id <= 321) {
    return drizzleImage;
  } else if (id >= 500 && id <= 531) {
    return rainImage;
  } else if (id >= 600 && id <= 622) {
    return snowImage;
  } else if (id >= 701 && id <= 781) {
    return atmosphereImage;
  } else if (id === 800) {
    return clearImage;
  } else if (id >= 801 && id <= 804) {
    return cloudsImage;
  } else {
    return defaultImage;
  }
}

export function displayDate() {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = new Date();
  return `${date.getHours()}:${date.getMinutes()} - ${
    days[date.getDay()]
  }, ${date.getDay()} ${months[date.getMonth()]} ${date
    .getFullYear()
    .toString()
    .slice(-2)}`;
}

export function displayIcon(id) {
  if (id >= 200 && id <= 232) {
    return thunderstormIcon;
  } else if (id >= 300 && id <= 321) {
    return drizzleIcon;
  } else if (id >= 500 && id <= 531) {
    return rainIcon;
  } else if (id >= 600 && id <= 622) {
    return snowIcon;
  } else if (id >= 701 && id <= 781) {
    return atmosphereIcon;
  } else if (id === 800) {
    return clearIcon;
  } else if (id >= 801 && id <= 804) {
    return cloudsIcon;
  } else {
    return defaultIcon;
  }
}

export function checkRain(data) {
  try {
    return data.rain["1h"];
  } catch (error) {
    return "0";
  }
}
