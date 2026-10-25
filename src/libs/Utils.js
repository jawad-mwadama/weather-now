//@ts-nocheck


// weather data fetch
export const fetchWeatherData = async ({
  lat,
  lon,
  units = "metric",
}) => {
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


// fetch location data
export const fetchLocationData = async (query) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}count=10&language=en&format=json`;
  const response= await fetch (url);

  if (!response.ok){
    throw new Error("Failed to fetch location data")
  }

  const data = await response.json()
  return data.results || []
};

// format date for display
export const formatDate=(date)=>{
  const options = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
  }

  return date.toLocaleDateString("en-US",options)
}


// get day name for forecast
export const getDayName=(dateString)=>{
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US",{"weekday":"long"})
}

// get temparature unit symbol
export const getTemparatureUnit=(units)=>{
  return units === "metrics" ? "°C" : "°F"
}

// get WindSpeed unit
export const getWindSpeedUnit=(units)=>{
  return units === "metrics" ? "km/h" : "mph"
}

// get PrecipitationUnit
export const getPrecipitationUnit=(units)=>{
  return units === "metrics" ? "mm" : "in"
}

// get WMO code descriptions
export const getWeatherDescription = (code) => {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  return descriptions[code] || "Unknown";
};