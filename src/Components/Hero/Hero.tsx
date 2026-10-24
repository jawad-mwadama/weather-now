import CurrentWeather from "../CurrentWeather/CurrentWeather";
import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import Metrics from "../Metrics/Metrics";

function Hero() {
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
