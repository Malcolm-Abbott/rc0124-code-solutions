type Props = {
  count: number;
};

export function ImageBank({ count }: Props) {
  const directories = ['/cool-car.jpg', 'cool-kitty.jpg', 'starry-sky.jpeg'];

  return (
    <>
      <div className="basis-full">
        <div className="size-96 m-auto flex">
          <img
            src={`${directories[count]}`}
            className="rounded-lg object-fill"
          />
        </div>
      </div>
    </>
  );
}
