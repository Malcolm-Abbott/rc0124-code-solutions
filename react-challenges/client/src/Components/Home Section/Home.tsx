import { Menu } from '../Menu';
import { Challenges } from './Challenges';

type Props = {
  isActive: boolean;
  setIsActive: (arg1: boolean) => void;
};

export function Home({ isActive, setIsActive }: Props) {
  if (isActive) return <Menu isActive={isActive} setIsActive={setIsActive} />;

  return (
    <div className="container">
      <Challenges />
    </div>
  );
}
