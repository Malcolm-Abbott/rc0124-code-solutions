/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    async function load() {
      try {
        const result = await readItems();
        setItems(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <ul className="container flex h-screen">
      <div className="m-auto divide-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-2xl font-semibold py-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white px-8 hover:bg-gradient-to-l cursor-pointer hover:ring-2 ring-slate-800 ring-1">
            {item.id}: {item.name}
          </li>
        ))}
      </div>
    </ul>
  );
}
