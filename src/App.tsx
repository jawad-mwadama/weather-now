import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/SearchBar";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import Metrics from "./Components/Metrics/Metrics";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import HourlyForecast from "./Components/HourlyForecast/HourlyForecast";
import { useEffect, useState } from "react";
import { fetchLocationData, fetchWeatherData } from "./libs/Utils";

import error from "./assets/images/icon-error.svg";
import retry from "./assets/images/icon-retry.svg";
import LoadingState from "./Components/LoadingState/LoadingState";

interface Location {
  name: string;
  lat: number;
  lon: number;
}

interface LocationData {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface WeatherData {
  [key: string]: unknown;
}

type Units = "metric" | "imperial";

function App() {
  //@ts-nocheck
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const [location, setLocation] = useState<Location>({
    name: "Berlin,Germany",
    lat: 52.52,
    lon: 13.405,
  });

  const [units, setUnits] = useState<Units>("metric");
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<LocationData[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

  const handleSearch = async (searchTerm: string): Promise<void> => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setShowSearchResults(false);

    try {
      const locationData: LocationData[] = await fetchLocationData(searchTerm);
      setSearchResults(locationData);

      if (location.length > 0) {
        setShowSearchResults(true);
      }
    } catch (error: unknown) {
      console.error("Error Searching Location", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSelect = (locationData: LocationData): void => {
    const newLocation: Location = {
      name: `${locationData.name}, ${fetchLocationData.country}`,
      lat: locationData.latitude,
      lon: locationData.longitude,
    };

    setLocation(newLocation);
    setShowSearchResults(false);
    setSearchResults([]);
  };

  const loadWeatherData = async (): Promise<void> => {
    if (!weatherData) {
      setInitialLoading(true);
    } else {
      setLoading(true);
    }

    try {
      const data: WeatherData = await fetchWeatherData(
        location.lat,
        location.lon,
        units,
      );
      setWeatherData(data);
    } catch (error: unknown) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    loadWeatherData();
  }, [location, units]);

  const toggleUnits = (): void => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  if (initialLoading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-neutral-900">
      <Navbar />
      <Header units={units} onToggleUnits={toggleUnits} />
      <SearchBar
        onSearch={handleSearch}
        loading={loading}
        searchResults={searchResults}
        showSearchResults={showSearchResults}
        onLocationSelect={handleLocationSelect}
        onCloseResults={() => setShowSearchResults(false)}
      />

      {weatherData ? (
        <div className="grid grid-cols-1 items-start gap-6 px-36 py-1 text-white lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          {/* Left column: Main weather content */}
          <div className="flex min-w-0 flex-col gap-3">
            {/* current weather */}
            <CurrentWeather data={weatherData} location={location} />

            {/* Metric cards */}
            <Metrics data={weatherData} units={units} loading={loading} />

            {/* Daily forecast */}
            <DailyForecast
              data={weatherData}
              onDaySelect={setSelectedDay}
              selectedDay={selectedDay}
              loading={loading}
            />
          </div>

          {/* Right column: Hourly forecast */}
          <HourlyForecast
            data={weatherData}
            selectedDay={selectedDay}
            onDayChange={setSelectedDay}
            loading={loading}
          />
        </div>
      ) : (
        <div className="mx-auto flex max-w-lg flex-col items-center space-y-4 text-center">
          <img src={error} alt="" className="mx-auto block size-10" />
          <h2 className="text-4xl">Something went wrong</h2>
          <p className="text-gray-400">
            We couldn't connect to the server (API error). Please try again in a
            few moments.
          </p>

          <button
            onClick={fetchWeatherData}
            className="glass-card flex items-center justify-center space-x-2 rounded-lg px-4 py-2 transition-all duration-200 hover:bg-white/20"
          >
            <img src={retry} alt="" className="mr-2 size-4" />
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
