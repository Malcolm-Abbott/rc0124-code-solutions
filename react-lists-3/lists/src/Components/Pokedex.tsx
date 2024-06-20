import { PokeList } from './PokeList';

export function Pokedex() {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ];

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <PokeList list={pokedex} />
      </div>
    </div>
  );
}
