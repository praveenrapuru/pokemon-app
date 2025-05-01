const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Search Pokémon..."
    value={search}
    onChange={e => setSearch(e.target.value)}
    className="p-2 border rounded w-full sm:w-64"
  />
);
export default SearchBar;
