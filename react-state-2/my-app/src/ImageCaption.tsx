type Props = {
  imageCap: string;
};

export function ImageCaption({ imageCap }: Props) {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-4">{imageCap}</h3>
    </div>
  );
}
