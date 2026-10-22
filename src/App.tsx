import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/SearchBar";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-neutral-900">
      <Navbar />
      <Hero />
      <SearchBar />
    </div>
  );
}

export default App;
