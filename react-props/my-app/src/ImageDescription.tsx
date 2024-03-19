type Props = {
  imgDescription: string;
};

export function ImageDescription(props: Props) {
  return (
    <div>
      <p>{props.imgDescription}</p>
    </div>
  );
}
