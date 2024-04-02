import { FaCircle, FaRegCircle } from 'react-icons/fa';

interface Image {
  src: string;
  alt: string;
}

type Props = {
  images: Image[];
  currentIndex: number;
  onCircleClick: (arg1: number) => void;
};

export function Circle({ images, currentIndex, onCircleClick }: Props) {
  const arrayOfCircles = images.map((image, index) => {
    if (index === currentIndex) {
      return (
        <FaCircle
          className="fa-circle"
          size={30}
          onClick={() => onCircleClick(index)}
          key={index}
        />
      );
    } else {
      return (
        <FaRegCircle
          className="fa-circle"
          size={30}
          onClick={() => onCircleClick(index)}
          key={index}
        />
      );
    }
  });

  return <>{arrayOfCircles}</>;
}
