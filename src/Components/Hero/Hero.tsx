import React from "react";
import bgLarger from "../../assets/images/bg-today-large.svg";

import rainy from "../../assets/images/icon-rain.webp";

function Hero() {
  return (
    <div className="text-white">
      <div>
        <img src={bgLarger} alt="large bg" />
      </div>

      {/* metric divs */}
      <div className="flex gap-3">
        <div className="flex flex-col rounded-lg bg-neutral-700 px-4 py-5">
          <span className="text-xs">Feels like</span>
          <span className="pt-3 text-2xl">64&deg;</span>
        </div>
        <div className="flex flex-col rounded-lg bg-neutral-700 px-4 py-5">
          <span className="text-xs">Humidity</span>
          <span className="pt-3 text-2xl">46&deg;</span>
        </div>
        <div className="flex flex-col rounded-lg bg-neutral-700 px-4 py-5">
          <span className="text-xs">Wind</span>
          <span className="pt-3 text-2xl">9 Mph</span>
        </div>
        <div className="flex flex-col rounded-lg bg-neutral-700 px-4 py-5">
          <span className="text-xs">Precipitation</span>
          <span className="pt-3 text-2xl">0 In</span>
        </div>
      </div>

      {/* forecast divs */}
      <div>
        <h3>Daily Forecast</h3>

        <div className="flex flex-col justify-center bg-neutral-700 px-4 py-3">
          <span>Tue</span>
          <img src={rainy} className="h-10 w-10 object-cover" alt="" />
        </div>
      </div>
      <div> hourly forecast divs</div>
    </div>
  );
}

export default Hero;
