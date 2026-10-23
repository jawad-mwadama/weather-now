import bgLarger from "../../assets/images/bg-today-large.svg";
import rainy from "../../assets/images/icon-rain.webp";

function Hero() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 px-36 py-1 text-white lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
      {/* Left column: Main weather content */}
      <div className="flex min-w-0 flex-col gap-3">
        {/* Weather image */}

        <div className="relative w-full">
          <img src={bgLarger} alt="large bg" className="block h-72 w-full" />

          <div className="absolute inset-0 flex items-center justify-between px-8">
            {/* City and date on the left */}
            <div className="flex flex-col">
              <h1 className="font-heading text-2xl font-bold">
                Berlin, Germany
              </h1>
              <span className="text-sm">Tue, Aug 5, 2026</span>
            </div>

            {/* Weather icon next to temperature on the right */}
            <div className="flex items-center gap-3">
              <img
                src={rainy}
                className="h-20 w-20 object-contain"
                alt="rainy"
              />
              <span className="font-heading text-8xl font-bold italic">
                60&deg;
              </span>
            </div>
          </div>
        </div>

        {/* Metric cards */}
        <div className="flex w-full gap-3">
          <div className="flex flex-1 flex-col rounded-lg bg-neutral-700 px-3 py-3">
            <span className="text-xs">Feels like</span>
            <span className="pt-2 text-2xl">64&deg;</span>
          </div>

          <div className="flex flex-1 flex-col rounded-lg bg-neutral-700 px-3 py-3">
            <span className="text-xs">Humidity</span>
            <span className="pt-2 text-2xl">46&deg;</span>
          </div>

          <div className="flex flex-1 flex-col rounded-lg bg-neutral-700 px-3 py-3">
            <span className="text-xs">Wind</span>
            <span className="pt-2 text-2xl">9 Mph</span>
          </div>

          <div className="flex flex-1 flex-col rounded-lg bg-neutral-700 px-3 py-3">
            <span className="text-xs">Precipitation</span>
            <span className="pt-2 text-2xl">0 In</span>
          </div>
        </div>

        {/* Daily forecast */}
        <div className="gap-3 py-1">
          <h3 className="py-2">Daily Forecast</h3>

          <div className="flex w-full gap-2">
            <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-700 px-3 py-2">
              <span>Tue</span>
              <img src={rainy} className="h-10 w-10 object-cover" alt="" />
              <div className="flex justify-between gap-2">
                <span>68 &deg;</span>
                <span>57 &deg;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: Hourly forecast */}
      <div className="min-w-0">
        {/* Header */}
        <div className="flex w-full items-center justify-between rounded-t-lg bg-neutral-700 p-3 pb-2">
          <span className="font-semibold text-white">Hourly Forecast</span>

          <span className="rounded-lg bg-neutral-800 p-2 text-sm">
            <select
              id="days"
              name="days"
              className="max-w-28 bg-transparent text-white outline-none"
            >
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
            </select>
          </span>
        </div>

        {/* Hourly weather items */}
        <div className="flex w-full flex-col gap-2 rounded-b-lg bg-neutral-700 p-3 pt-2 text-white">
          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">3 PM</span>
            </div>
            <span className="text-xl font-bold">69&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-1.5">
            <div className="flex items-center gap-3">
              <img src={rainy} alt="weather icon" className="h-10 w-10" />
              <span className="text-sm font-medium text-neutral-200">4 PM</span>
            </div>
            <span className="text-xl font-bold">71&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
