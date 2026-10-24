import React from "react";

function Metrics() {
  return (
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
  );
}

export default Metrics;
