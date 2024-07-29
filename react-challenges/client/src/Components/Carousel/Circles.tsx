import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { images } from './data';

type Props = {
  index: number;
  setIndex: (arg1: number) => void;
};

export function Circles({ index, setIndex }: Props) {
  return (
    <div className="flex justify-center gap-x-4 mt-6">
      {images.map((image, i) => {
        if (i === index)
          return <FaCircle key={i} onClick={() => setIndex(i)} />;

        return <FaRegCircle key={i} onClick={() => setIndex(i)} />;
      })}
    </div>
  );
}
