type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  list: Pokemon[];
};

export function PokeList({ list }: Props) {
  return (
    <ul className="divide-y-2">
      {list.map((pokemon) => {
        return <Pokemon pokemon={pokemon} key={pokemon.number} />;
      })}
    </ul>
  );
}

type PokemonProps = {
  pokemon: Pokemon;
};

function Pokemon({ pokemon }: PokemonProps) {
  const { name } = pokemon;
  return (
    <li className="cursor-pointer px-12 py-6 bg-gradient-to-r from-emerald-800 to-emerald-600 ring-1 ring-emerald-950 text-white text-2xl hover:bg-gradient-to-l ">
      {name}
    </li>
  );
}
