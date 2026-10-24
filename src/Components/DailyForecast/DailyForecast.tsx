import React from "react";
import rainy from "../../assets/images/icon-rain.webp";

function DailyForecast() {
  return (
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
  );
}

export default DailyForecast;
