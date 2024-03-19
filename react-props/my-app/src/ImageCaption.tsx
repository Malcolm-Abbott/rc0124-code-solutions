type Props = {
  imgCaption: string;
};

export function ImageCaption(props: Props) {
  return (
    <div>
      <h3>{props.imgCaption}</h3>
    </div>
  );
}
