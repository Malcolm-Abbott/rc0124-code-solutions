import './ImageContainer.css';

type Props = {
  imgSrc: string;
};

export function ImageContainer({ imgSrc }: Props) {
  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="width-50 ">
        <img className="image-fill rounded-lg" src={imgSrc} alt="space-image" />
      </div>
    </div>
  );
}
