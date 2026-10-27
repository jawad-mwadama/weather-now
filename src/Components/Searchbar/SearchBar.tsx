import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import search from "../../assets/images/icon-search.svg";

interface LocationData {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface SearchBarProps {
  onSearch: (searchTerm: string) => void | Promise<void>;
  loading: boolean;
  searchResults: LocationData[];
  showSearchResults: boolean;
  onLocationSelect: (location: LocationData) => void;
  onCloseResults: () => void;
}

function SearchBar({
  onSearch,
  loading,
  searchResults,
  showSearchResults,
  onLocationSelect,
  onCloseResults,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      onCloseResults();
    }
  };

  return (
    <div className="relative mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <img
            src={search}
            alt=""
            className="absolute top-1/2 left-3 z-10 h-5 w-5 -translate-y-1/2 transform text-gray-400"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for a place..."
            className="w-full rounded-lg bg-neutral-600 py-3 pr-4 pl-10 text-white placeholder-gray-300 transition-all duration-200 focus:ring-2 focus:ring-white focus:outline-none"
            disabled={loading}
          />

          {loading && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !searchTerm.trim()}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-white focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Progress indicator */}
      {loading && (
        <div className="glass-card absolute top-full right-0 left-0 z-50 mt-2 rounded-lg p-6">
          <div className="flex items-center space-x-2 text-gray-300">
            <div className="size-4 animate-spin rounded-full border-b-2 border-white" />
            <span className="text-sm">Search in progress</span>
          </div>
        </div>
      )}

      {/* Search results */}
      {showSearchResults && searchResults.length > 0 && (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 max-h-60 overflow-y-auto rounded-lg bg-neutral-700 shadow-lg">
          {searchResults.map((result, index) => (
            <button
              key={`${result.name}-${result.country}-${index}`}
              type="button"
              onClick={() => onLocationSelect(result)}
              className="w-full border-b border-white/10 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-white/10"
            >
              <div className="font-medium text-white">{result.name}</div>

              <div className="text-sm text-gray-300">{result.country}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
