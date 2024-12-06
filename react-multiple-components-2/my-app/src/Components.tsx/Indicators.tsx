import { Indicator } from './Indicator';

type Props = {
  index: number;
  setIndex: (arg1: number) => void;
};

export function Indicators({ index, setIndex }: Props) {
  return (
    <div className="flex">
      <Indicator number={0} index={index} setIndex={setIndex} />
      <Indicator number={1} index={index} setIndex={setIndex} />
      <Indicator number={2} index={index} setIndex={setIndex} />
      <Indicator number={3} index={index} setIndex={setIndex} />
      <Indicator number={4} index={index} setIndex={setIndex} />
      <Indicator number={5} index={index} setIndex={setIndex} />
    </div>
  );
}
