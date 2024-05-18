type Props = {
  imageDescrip: string;
};

export function ImageDescription({ imageDescrip }: Props) {
  return (
    <div>
      <p className="mb-4 text-center">{imageDescrip}</p>
    </div>
  );
}
