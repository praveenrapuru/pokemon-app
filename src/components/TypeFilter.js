import React, { useEffect, useState } from "react";

const TypeFilter = ({ typeFilter, setTypeFilter }) => {
  const [types, setTypes] = useState(["All"]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/type");
        const data = await res.json();
        const filtered = data.results
          .map((t) => t.name)
          .filter((name) => name !== "shadow" && name !== "unknown");
        setTypes(["All", ...filtered]);
      } catch (err) {
        console.error("Failed to fetch types", err);
      }
    };

    fetchTypes();
  }, []);

  return (
    <select
      value={typeFilter}
      onChange={(e) => setTypeFilter(e.target.value)}
      className="p-2 border rounded w-full sm:w-64"
    >
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default TypeFilter;
