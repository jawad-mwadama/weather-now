import rainy from "../../assets/images/icon-rain.webp";

function HourlyForecast() {
  return (
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
  );
}

export default HourlyForecast;
