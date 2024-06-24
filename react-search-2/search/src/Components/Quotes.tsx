type Props = {
  quotes: string[];
};

export function Quotes({ quotes }: Props) {
  if (quotes.length < 1)
    return (
      <ul>
        <li className="text-red-400">No quotes match your search.</li>
      </ul>
    );

  return (
    <ul className="mt-8">
      {quotes.map((quote, index) => {
        if (index === 0)
          return (
            <li
              key={index}
              className=" border-b-2 border-b-black border-t-2 border-t-black">
              {quote}
            </li>
          );
        return (
          <li key={index} className=" border-b-2 border-b-black">
            {quote}
          </li>
        );
      })}
    </ul>
  );
}
