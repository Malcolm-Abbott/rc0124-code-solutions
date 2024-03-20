import { useState } from 'react';
import { Button } from './HotButton.tsx';
import './App.css';

const buttonClass = ['cold', 'cool', 'tepid', 'warm', 'hot', 'nuclear'];

function App() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  function handleClick() {
    setCount(count + 1);
    switch (true) {
      case count < 3:
        break;
      case count === 3:
        setIndex(index + 1);
        break;
      case count === 6:
        setIndex(index + 1);
        break;
      case count === 9:
        setIndex(index + 1);
        break;
      case count === 12:
        setIndex(index + 1);
        break;
      case count === 15:
        setIndex(index + 1);
        break;
    }
  }

  return (
    <>
      <Button
        onButtonClick={handleClick}
        className={buttonClass[index]}
        clicks={count}
      />
    </>
  );
}

export default App;
