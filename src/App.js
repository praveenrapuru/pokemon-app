import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <Header />
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <SearchBar search={search} setSearch={setSearch} />
        <TypeFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      </div>
      <PokemonList search={search} typeFilter={typeFilter} />
    </div>
  );
};

export default App;
