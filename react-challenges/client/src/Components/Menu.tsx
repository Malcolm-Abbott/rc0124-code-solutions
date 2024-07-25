import { useNavigate } from 'react-router-dom';
import { challenges, type Challenge, nameToUrl } from '../lib/data';
import { v4 as uuidv4 } from 'uuid';
import { FaRegCircleXmark } from 'react-icons/fa6';

type Props = {
  isActive: boolean;
  setIsActive: (arg1: boolean) => void;
};

export function Menu({ isActive, setIsActive }: Props) {
  const navigate = useNavigate();

  function handleClick(challenge: Challenge) {
    navigate(nameToUrl(challenge.name));
    setIsActive(!isActive);
  }

  return (
    <nav>
      <ul className="text-center divide-y-2 divide-gray-800">
        <li
          className="cursor-pointer text-3xl bg-gradient-to-r from-slate-700 to-slate-900 text-white py-8 flex justify-center relative items-center flex-grow"
          onClick={() => setIsActive(!isActive)}>
          <h1>Challenges</h1>
          <FaRegCircleXmark
            className="absolute right-8 text-4xl"
            onClick={() => setIsActive(!isActive)}
          />
        </li>
        {challenges.map((challenge: Challenge) => {
          return (
            <li
              onClick={() => handleClick(challenge)}
              className="cursor-pointer text-3xl bg-gradient-to-r from-slate-700 to-slate-900 text-white py-8 hover:bg-gradient-to-l"
              key={uuidv4()}>
              {challenge.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
