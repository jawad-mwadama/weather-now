import { useEffect } from "react";
import { fetchWeatherData } from "../../libs/Utils";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import Metrics from "../Metrics/Metrics";

function Hero() {
  useEffect(() => {
    console.log("🏃‍♂️ Triggering weather fetch call...");

    fetchWeatherData({ lat: "51.5074", lon: "-0.1278", units: "metric" })
      .then((data) => {
        console.log("🟢 API IS WORKING! Data payload:", data);
      })
      .catch((error) => {
        console.error("🔴 FETCH FAILED DETAIL:", {
          message: error.message,
          name: error.name,
          stack: error.stack,
          errorObject: error,
        });
      });
  }, []);

  return (
    <div className="grid grid-cols-1 items-start gap-6 px-36 py-1 text-white lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
      {/* Left column: Main weather content */}
      <div className="flex min-w-0 flex-col gap-3">
        {/* current weather  */}

        <CurrentWeather />

        {/* Metric cards */}
        <Metrics />

        {/* Daily forecast */}
        <DailyForecast />
      </div>

      {/* Right column: Hourly forecast */}
      <HourlyForecast />
    </div>
  );
}

export default Hero;
