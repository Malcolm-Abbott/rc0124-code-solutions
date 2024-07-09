import { FaCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
  index: number;
};

export function Circles({ images, index }: Props) {
  return (
    <>
      {images.map((image, ind) => {
        if (index === ind) return <FaCircle className="text-xl" key={ind} />;
        return <FaRegCircle className="text-xl" key={ind} />;
      })}
    </>
  );
}
