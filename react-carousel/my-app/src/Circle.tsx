import { FaCircle, FaRegCircle } from 'react-icons/fa';

interface Image {
  src: string;
  alt: string;
}

type Props = {
  images: Image[];
  currentIndex: number;
};

export function Circle({ images, currentIndex }: Props) {
  const arrayOfCircles = images.map((image, index) => {
    if (index === currentIndex) {
      return <FaCircle className="fa-circle" size={30} />;
    } else {
      return <FaRegCircle className="fa-circle" size={30} />;
    }
  });

  return <>{arrayOfCircles}</>;
}
