import rainy from "../../assets/images/icon-rain.webp";
import bgLarger from "../../assets/images/bg-today-large.svg";

function CurrentWeather() {
  return (
    <div className="relative w-full">
      <img src={bgLarger} alt="large bg" className="block h-72 w-full" />

      <div className="absolute inset-0 flex items-center justify-between px-8">
        {/* City and date on the left */}
        <div className="flex flex-col">
          <h1 className="font-heading text-2xl font-bold">Berlin, Germany</h1>
          <span className="text-sm">Tue, Aug 5, 2026</span>
        </div>

        {/* Weather icon next to temperature on the right */}
        <div className="flex items-center gap-3">
          <img src={rainy} className="h-20 w-20 object-contain" alt="rainy" />
          <span className="font-heading text-8xl font-bold italic">
            60&deg;
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
