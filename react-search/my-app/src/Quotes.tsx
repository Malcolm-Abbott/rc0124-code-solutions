type Props = {
  quotes: string[];
};

export function Quotes({ quotes }: Props) {
  const listOfQuotes = quotes.map((quote, index) => {
    return <li key={index}>{quote}</li>;
  });
  return <ul>{listOfQuotes}</ul>;
}
