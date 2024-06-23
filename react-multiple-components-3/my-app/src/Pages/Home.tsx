import { Title } from '../Components/Title';
// import { useState } from "react";
import { Button } from '../Components/Button';
import { Numbers } from '../Components/Numbers';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export function Home() {
  // const [index, setIndex] = useState(0);

  return (
    <div className="grid place-items-center">
      <Title title={items[index]} />
      <Button direction="Prev" />
      <Numbers items={items} />
      <Button direction="Next" />
    </div>
  );
}
