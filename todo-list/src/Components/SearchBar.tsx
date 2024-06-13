import { ChangeEvent } from 'react';

type Props = {
  onSearchChange: (arg1: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
};

export function SearchBar({ onSearchChange, searchValue }: Props) {
  return (
    <form>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Search Task"
        className="py-1 px-2 mb-2 text-gray-800 border border-gray-200"
      />
    </form>
  );
}
