type Props = {
  imageCap: string;
};

export function ImageCaption({ imageCap }: Props) {
  return (
    <div>
      <h3 className="font-semibold text-xl">{imageCap}</h3>
    </div>
  );
}
