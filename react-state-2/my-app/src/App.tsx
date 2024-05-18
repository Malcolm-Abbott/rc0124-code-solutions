import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import { useState } from 'react';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = [
  '/starry-sky.jpeg',
  '/rocky-seaside.jpg',
  '/untouched-wilderness.jpg',
];
const imageCap = [
  'A Beautiful Image of Space',
  'A Remote and Rocky Seaside',
  'A gorgeous Sliver of Untouched Wilderness',
];
const imageDescrip = [
  'This is a picture capturing the sky in all its majesty on a night without artificial light.',
  'In this photo, somewhere out in nature, a photographer was able to capture a stunning rocky seaside.',
  'The location is unknown, but one thing is for sure: This pocket is wilderness is absolutely mesmerizing!',
];
const buttonText = 'Click for Next Image';

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageSrc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="container flex h-screen">
      <div className="m-auto grid place-items-center">
        <Header headerText={headerText} />
        <ImageContainer imageSrc={imageSrc[index]} />
        <ImageCaption imageCap={imageCap[index]} />
        <ImageDescription imageDescrip={imageDescrip[index]} />
        <ButtonContainer buttonText={buttonText} onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
