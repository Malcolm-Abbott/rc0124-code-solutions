type Props = {
  count: number;
};

export function Captions({ count }: Props) {
  const captions = ['A Slick Ride', 'A Shaggy Cat', 'A Starry Sky'];
  return (
    <div className="basis-full">
      <h3 className="text-2xl text-center font-semibold">{captions[count]}</h3>
    </div>
  );
}
