import { useState } from 'react';
import { ImageBank } from './Components/ImageBank';
import { Title } from './Components/Title';
import { Captions } from './Components/Captions';
import { Descriptions } from './Components/Descriptions';
import { NextButton } from './Components/NextButton';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen container flex">
        <div className="m-auto flex flex-wrap gap-y-8">
          <Title />
          <ImageBank count={count} />
          <Captions count={count} />
          <Descriptions count={count} />
          <NextButton count={count} setCount={setCount} />
        </div>
      </div>
    </>
  );
}
