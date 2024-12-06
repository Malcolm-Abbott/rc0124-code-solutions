import { pokedex } from '../lib/data';

type Pokemon = {
  number: string;
  name: string;
};

export function List() {
  return (
    <ul>
      {pokedex.map((pokemon: Pokemon) => {
        return (
          <li
            key={pokemon.number}
            className="p-4 font-semibold bg-gradient-to-r from-blue-800 to-cyan-700 ring-2 ring-black hover:bg-gradient-to-l cursor-pointer">
            {pokemon.name}
          </li>
        );
      })}
    </ul>
  );
}
