import { SearchBar } from '../Components/SearchBar';
import { Quotes } from '../Components/Quotes';
import { quotes } from '../lib/data';
import { useState, useEffect } from 'react';

export function Search() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('value:', value);
  }, [value]);

  return (
    <form>
      <div className="flex h-screen">
        <div className="m-auto">
          <SearchBar value={value} setValue={setValue} />
          <Quotes
            quotes={quotes.filter((quote) =>
              quote.toLowerCase().includes(value.toLowerCase())
            )}
          />
        </div>
      </div>
    </form>
  );
}
