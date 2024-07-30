import { images } from './data';

type Props = {
  index: number;
};

export function Images({ index }: Props) {
  return (
    <div className="w-72 flex justify-center">
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="object-cover h-72"
      />
    </div>
  );
}
