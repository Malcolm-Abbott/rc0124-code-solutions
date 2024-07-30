import { quotes } from './data';

type Props = {
  value: string;
};

export function Quotes({ value }: Props) {
  if (value.length) {
    const filtered = quotes.filter((quote) => quote.includes(value));

    if (!filtered.length)
      return (
        <ul className="mt-20">
          <li className="font-semibold mt-2">No items match the filter.</li>
        </ul>
      );

    return (
      <ul className="mt-20">
        {filtered.map((quote: string, index) => {
          return (
            <li key={index} className="font-semibold mt-2">
              {quote}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="mt-20">
      {quotes.map((quote: string, index) => {
        return (
          <li key={index} className="font-semibold mt-2">
            {quote}
          </li>
        );
      })}
    </ul>
  );
}
