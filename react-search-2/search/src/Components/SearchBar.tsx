type Props = {
  value: string;
  setValue: (arg1: string) => void;
};

export function SearchBar({ value, setValue }: Props) {
  return (
    <label>
      <div className="px-4 font-semibold">Filter Quotes</div>
      <input
        type="text"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 border-slate-700 w-96 rounded-full h-10 px-4"
      />
    </label>
  );
}
