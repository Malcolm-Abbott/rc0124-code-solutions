import { Title } from '../Components/Title';
import { useState } from 'react';
import { Button } from '../Components/Button';
import { Numbers } from '../Components/Numbers';

export const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div className="grid place-items-center">
      <Title title={items[index]} />
      <Button direction="Prev" index={index} setIndex={setIndex} />
      <Numbers items={items} setIndex={setIndex} index={index} />
      <Button direction="Next" index={index} setIndex={setIndex} />
    </div>
  );
}
