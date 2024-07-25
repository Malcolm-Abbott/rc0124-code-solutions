import { useNavigate } from 'react-router-dom';

type Props = {
  isActive: boolean;
  setIsActive: (arg1: boolean) => void;
};

export function Menu({ isActive, setIsActive }: Props) {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="container text-center">
        <li
          className="cursor-pointer text-3xl bg-gradient-to-r from-slate-700 to-slate-900 text-white py-8"
          onClick={() => setIsActive(!isActive)}>
          Menu
        </li>
        <li
          onClick={() => navigate('hot-button')}
          className="cursor-pointer text-3xl bg-gradient-to-r from-slate-700 to-slate-900 text-white py-8">
          Hot Button
        </li>
      </ul>
    </nav>
  );
}
