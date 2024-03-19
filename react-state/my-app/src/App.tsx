import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc: string[] = [
  '/starry-sky.jpeg',
  '/rocky-seaside.jpg',
  '/untouched-wilderness.jpg',
];
const imageCap: string[] = [
  'A Beautiful Image of Space',
  'A Rocky Seaside',
  'An Untouched Span of Wilderness',
];
const imageDescrip: string[] = [
  'A stunning glimpse of the beauty of that which is beyond, without the interference of artificial lights!',
  'A dazzling shot of an unconventional shoreline somewhere far off from home.',
  'An enigmatic clip of an enormous and beautiful forest that leaves the viewer wondering just where on earth this could be.',
];
const buttonText = 'Click for Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
