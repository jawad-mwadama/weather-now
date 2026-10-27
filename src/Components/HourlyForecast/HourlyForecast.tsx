import { useState } from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { getDayName } from "../../libs/Utils";
import dropdown from "../../assets/images/icon-dropdown.svg";

export default function HourlyForecast({
  data,
  selectedDay,
  onDayChange,
  loading,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const hourlyData = data.hourly;
  const dailyData = data.daily;

  // Get hourly data for selected day (24 hours starting from selected day)
  const startHour = selectedDay * 24;
  const endHour = startHour + 24;

  const selectedDayHours = hourlyData.time
    .slice(startHour, endHour)
    .map((time, index) => {
      const hour = new Date(time).getHours();
      const temp = Math.round(hourlyData.temperature_2m[startHour + index]);
      const weatherCode = hourlyData.weather_code[startHour + index];

      return {
        time: `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour} ${
          hour < 12 ? "AM" : "PM"
        }`,
        temp,
        weatherCode,
      };
    });

  const selectedDayName = getDayName(dailyData.time[selectedDay], selectedDay);

  return (
    <div className="h-fit rounded-xl bg-neutral-600 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Hourly forecast</h3>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 rounded-lg bg-neutral-700 px-3 py-2 transition-all duration-200 hover:bg-white/20"
          >
            <span className="text-white">{selectedDayName}</span>

            <img src={dropdown} alt="" />
          </button>

          {isDropdownOpen && (
            <div className="glass-card absolute right-0 z-50 mt-2 w-32 rounded-lg shadow-lg">
              <div className="py-2">
                {dailyData.time.slice(0, 7).map((date, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onDayChange(index);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left transition-colors hover:bg-white/10 ${
                      selectedDay === index ? "bg-white/20" : ""
                    }`}
                  >
                    <div className="text-sm text-white">
                      {getDayName(date, index)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-h-96 space-y-3 overflow-y-auto">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex animate-pulse items-center justify-between px-2 py-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="glass-card h-6 w-6 rounded"></div>
                  <div className="glass-card h-4 w-12 rounded"></div>
                </div>
                <div className="glass-card h-4 w-8 rounded"></div>
              </div>
            ))
          : selectedDayHours.map((hour, index) => (
              <div
                key={index}
                className="glass-card flex items-center justify-between rounded-lg px-2 py-2 transition-all duration-200 hover:bg-white/10"
              >
                <div className="flex items-center space-x-3">
                  <WeatherIcon code={hour.weatherCode} size="small" />
                  <span className="font-medium text-white">{hour.time}</span>
                </div>
                <span className="font-semibold text-white">{hour.temp}°</span>
              </div>
            ))}
      </div>
    </div>
  );
}
