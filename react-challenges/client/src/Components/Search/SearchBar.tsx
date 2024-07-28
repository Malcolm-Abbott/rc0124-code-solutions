import { FaSearch } from 'react-icons/fa';

type Props = {
  value: string;
  setValue: (arg1: string) => void;
};

export function SearchBar({ value, setValue }: Props) {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-96 h-12 border-2 border-black rounded-3xl pl-8 text-slate-500 font-semibold tracking-wider"
        placeholder="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <FaSearch className="absolute top-1/3 left-2" />
    </div>
  );
}
