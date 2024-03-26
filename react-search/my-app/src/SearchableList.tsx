import { SearchBar } from './SearchBar';
import { Quotes } from './Quotes';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import './SearchableList.css';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [value, setValue] = useState('');

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const filteredQuotes =
    quotes.filter((quote) => quote.toLowerCase().includes(value.toLowerCase()))
      .length > 0
      ? quotes.filter((quote) =>
          quote.toLowerCase().includes(value.toLowerCase())
        )
      : ['No items match the filter.'];

  return (
    <>
      <SearchBar currentValue={value} onSearchChange={handleSearch} />
      <Quotes quotes={value.length === 0 ? quotes : filteredQuotes} />
    </>
  );
}
