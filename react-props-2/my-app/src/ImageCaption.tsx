type Props = {
  text: string;
};

export function ImageCaption({ text }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{text}</h3>
    </div>
  );
}
