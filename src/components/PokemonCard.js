const PokemonCard = ({ pokemon }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center shadow-md bg-white">
    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-24" />
    <h2 className="capitalize text-lg font-semibold">{pokemon.name}</h2>
    <p>ID: #{pokemon.id}</p>
    <div className="flex gap-2 mt-1">
      {pokemon.types.map(t => (
        <span key={t.slot} className="text-xs px-2 py-1 bg-gray-200 rounded">
          {t.type.name}
        </span>
      ))}
    </div>
  </div>
);
export default PokemonCard;
