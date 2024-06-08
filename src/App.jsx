import React from "react";

import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";

import DefaultImage from "./assets/default.jpg";

const App = () => {
  return (
    <main
      className="w-screen h-screen m-0 p-0 font-syne text-white grid grid-cols-[1fr_30%] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${DefaultImage})` }}
    >
      <LeftSection />
      <RightSection />
    </main>
  );
};

export default App;
