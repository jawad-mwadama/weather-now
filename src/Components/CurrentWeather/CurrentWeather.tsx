import { formatDate } from "../../libs/Utils";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function CurrentWeather({ data, location }) {
  if (!data) return null;

  const currentTemp = Math.round(data.current.temperature_2m);
  const weatherCode = data.current.weather_code;

  return (
    <div className="weather-bg relative overflow-hidden rounded-2xl px-6 py-24">
      <div className="relative z-10 flex flex-col items-center justify-between sm:flex-row">
        <div className="mb-4">
          <p className="mb-2 text-2xl font-bold text-white">{location.name}</p>
          <p className="text-base text-blue-100">{formatDate(new Date())}</p>
        </div>

        <div className="flex items-center space-x-4">
          <WeatherIcon code={weatherCode} size="large" />
          <div className="text-shadow ml-8 text-8xl font-bold text-white italic">
            {currentTemp}&deg;
          </div>
        </div>
      </div>
    </div>
  );
}
