type Props = {
  count: number;
};

export function Descriptions({ count }: Props) {
  const descriptions = [
    'A fast and furious ride.',
    'A real down to earth cat.',
    "A dazzling display of nature's beauty",
  ];

  return (
    <div className="basis-full">
      <p className="text-center">{descriptions[count]}</p>
    </div>
  );
}
