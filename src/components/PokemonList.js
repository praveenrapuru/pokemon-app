import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ search, typeFilter }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [types, setTypes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const allData = await Promise.all(
          res.data.results.map(p => axios.get(p.url).then(r => r.data))
        );
        setPokemonData(allData);
        extractTypes(allData);
        setFiltered(allData);
      } catch (err) {
        setError("Error fetching Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const extractTypes = (list) => {
    const unique = new Set();
    list.forEach(p => p.types.forEach(t => unique.add(t.type.name)));
    setTypes(["All", ...Array.from(unique)]);
  };

  useEffect(() => {
    let result = pokemonData.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (typeFilter !== "All") {
      result = result.filter(p =>
        p.types.some(t => t.type.name === typeFilter)
      );
    }
    setFiltered(result);
  }, [search, typeFilter, pokemonData]);

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (filtered.length === 0) return <p>No Pokémon found.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {filtered.length > 0 ? (
        filtered.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <p>No Pokémon found.</p>
      )}

    </div>
  );
};

export default PokemonList;
