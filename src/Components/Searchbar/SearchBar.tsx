function SearchBar() {
  return (
    <div className="flex items-center justify-center gap-4 py-3">
      <input
        type="search"
        placeholder="Search for a place"
        className="w-96 rounded-lg bg-neutral-700 px-4 py-2 text-white"
      ></input>
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
