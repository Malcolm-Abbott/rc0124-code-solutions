import './ImageContainer.css';

type Props = {
  imageSrc: string;
};

export function ImageContainer({ imageSrc }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill rounded-lg mb-4"
          src={imageSrc}
          alt="space-image"
        />
      </div>
    </div>
  );
}
