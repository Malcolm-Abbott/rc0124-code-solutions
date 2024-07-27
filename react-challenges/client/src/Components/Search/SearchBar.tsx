import { FaSearch } from 'react-icons/fa';

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-96 h-12 border-2 border-black rounded-3xl pl-8 text-slate-500 font-semibold tracking-wider"
        placeholder="search"
      />
      <FaSearch className="absolute top-1/3 left-2" />
    </div>
  );
}
