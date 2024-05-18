import './App.css';
import { Header } from './Components/Header';
import { ImagineContainer } from './Components/ImageContainer';
import { ImageCaption } from './Components/ImageCaption';
import { ImageDescription } from './Components/ImageDescription';
import { ButtonContainer } from './Components/ButtonContainer';

export function App() {
  return (
    <>
      <div className="container grid place-items-center gap-8">
        <Header />
        <ImagineContainer />
        <ImageCaption />
        <ImageDescription />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;
