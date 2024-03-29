import { useEffect, useState, useCallback } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const getData = useCallback(() => {
    return { foo: 'bar ' };
  }, []);
  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, [getData]);

  return <div>Fetching {counter} times</div>;
}
