import './ImageContainer.css';

type Props = {
  imgUrl: string;
};

export function ImageContainer(props: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={props.imgUrl} alt="space-image" />
      </div>
    </div>
  );
}
