import { ChangeEvent } from 'react';

type Props = {
  currentValue: string;
  onSearchChange: (Arg1: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ currentValue, onSearchChange }: Props) {
  return (
    <form>
      <input
        type="text"
        name="search"
        value={currentValue}
        onChange={onSearchChange}
        placeholder="Search"></input>
      <img src="/search-solid.svg" height="20px" width="20px"></img>
    </form>
  );
}
