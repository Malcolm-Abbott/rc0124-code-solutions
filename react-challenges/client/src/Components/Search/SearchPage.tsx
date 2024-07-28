import { Quotes } from './Quotes';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

export function SearchPage() {
  const [value, setValue] = useState('');

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <SearchBar value={value} setValue={setValue} />
        <Quotes value={value} />
      </div>
    </div>
  );
}
