import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { getDayName } from "../../libs/Utils";

export default function DailyForecast({ data, onDaySelect, selectedDay }) {
  const dailyData = data.daily;
  if (!data?.daily)
    return (
      <div className="rounded-xl">
        <h3 className="mb-4 text-xl font-semibold text-white">
          Daily forecast
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {dailyData.time.slice(0, 7).map((date, index) => (
            <button
              key={index}
              className="glass-card rounded-lg px-4 py-20 text-center"
            />
          ))}
        </div>
      </div>
    );

  return (
    <div className="rounded-xl">
      <h3 className="mb-4 text-xl font-semibold text-white">Daily forecast</h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {dailyData.time.slice(0, 7).map((date, index) => {
          const isSelected = selectedDay === index;
          const dayName = getDayName(date, index);
          const maxTemp = Math.round(dailyData.temperature_2m_max[index]);
          const minTemp = Math.round(dailyData.temperature_2m_min[index]);
          const weatherCode = dailyData.weather_code[index];

          return (
            <button
              key={index}
              onClick={() => onDaySelect(index)}
              className={`glass-card rounded-lg p-4 text-center transition-all duration-200 hover:bg-white/20 ${
                isSelected ? "bg-white/20 ring-2 ring-blue-400" : ""
              }`}
            >
              <div className="mb-2 text-sm text-gray-300">{dayName}</div>
              <div className="mb-3">
                <WeatherIcon code={weatherCode} size="medium" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">
                  {maxTemp}&deg;
                </div>
                <div className="text-sm">{minTemp}&deg;</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
