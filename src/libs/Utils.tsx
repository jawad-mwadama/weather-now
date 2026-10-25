interface Api {
  lat: string;
  lon: string;
  units?: "metric" | "imperial";
}

const fetchWeatherData = async ({
  lat,
  lon,
  units = "metric",
}: Api): Promise<any> => {
  const tempUnit = units === "metric" ? "celsius" : "fahrenheit";
  const windUnit = units === "metric" ? "kmh" : "mph";
  const precipUnit = units === "metric" ? "mm" : "inch";

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${encodeURIComponent(lat)}` +
    `&longitude=${encodeURIComponent(lon)}` +
    `&temperature_unit=${tempUnit}` +
    `&wind_speed_unit=${windUnit}` +
    `&precipitation_unit=${precipUnit}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,snowfall,weather_code,cloud_cover` +
    `&hourly=temperature_2m,rain,snowfall,relative_humidity_2m,apparent_temperature,weather_code,temperature_80m,temperature_120m,temperature_180m,wind_speed_10m` +
    `&daily=weather_code,precipitation_sum,precipitation_hours` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    // If the server returns 400 Bad Request, parse it so i can read why it failed
    const errorData = await response.json().catch(() => ({}));
    console.error("❌ Server rejected request details:", errorData);
    throw new Error(`Failed to fetch weather data: ${response.status}`);
  }

  return response.json();
};

export { fetchWeatherData };
