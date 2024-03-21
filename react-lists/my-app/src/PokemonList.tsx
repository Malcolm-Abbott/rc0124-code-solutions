interface Pokedex {
  number: string;
  name: string;
}

type Props = {
  pokedex: Pokedex[];
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon) => {
    return (
      <li key={pokemon.number}>
        <h1>{pokemon.name}</h1>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
