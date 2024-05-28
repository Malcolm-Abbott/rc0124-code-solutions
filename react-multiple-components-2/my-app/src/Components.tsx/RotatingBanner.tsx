import { Title } from './Title';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { Indicators } from './Indicators';

type Props = {
  title: string;
  index: number;
  setIndex: (arg1: number) => void;
};

export function RotatingBanner({ title, index, setIndex }: Props) {
  return (
    <div className="grid place-items-center gap-2">
      <Title title={title} />
      <PrevButton index={index} setIndex={setIndex} />
      <Indicators index={index} setIndex={setIndex} />
      <NextButton index={index} setIndex={setIndex} />
    </div>
  );
}
