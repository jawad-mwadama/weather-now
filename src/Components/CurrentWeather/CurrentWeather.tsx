// import rainy from "../../assets/images/icon-rain.webp";
import bgLarger from "../../assets/images/bg-today-large.svg";
import { formatDate } from "../../libs/Utils";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

function CurrentWeather({ data, location }) {
  if (!data) return null;

  const currentTemp = Math.round(data.current.temparature_2m);
  const weatherCode = data.current.weather_code;
  return (
    <div className="relative w-full">
      <img src={bgLarger} alt="large bg" className="block h-72 w-full" />

      <div className="absolute inset-0 flex items-center justify-between px-8">
        {/* City and date on the left */}
        <div className="flex flex-col">
          <h1 className="font-heading text-2xl font-bold">{location.name}</h1>
          <span className="text-sm">{formatDate(new Date())}</span>
        </div>

        {/* Weather icon next to temperature on the right */}
        <div className="flex items-center gap-3">
          <WeatherIcon code={weatherCode} size="large" />
          <span className="font-heading text-8xl font-bold italic">
            {currentTemp}&deg;
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
