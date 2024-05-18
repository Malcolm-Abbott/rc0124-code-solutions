type Props = {
  text: string;
};

export function ImageDescription({ text }: Props) {
  return (
    <div className="mb-4">
      <p>{text}</p>
    </div>
  );
}
