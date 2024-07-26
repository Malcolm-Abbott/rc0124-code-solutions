import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../Menu';

type Props = {
  isActive: boolean;
  setIsActive: (arg1: boolean) => void;
};

export function NavBar({ isActive, setIsActive }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    if (isActive) setIsActive(!isActive);
    navigate('/');
  }

  return (
    <>
      <header
        className={`shadow-lg flex py-4 text-white bg-gradient-to-r from-slate-900 to-slate-800 min-h-24 lg:min-h-28`}>
        <div className="w-full flex">
          <div className="basis-1/3"></div>
          <div
            className="basis-1/3 flex items-center justify-center"
            onClick={handleClick}>
            <h1
              className="text-3xl font-semibold text-center tracking-wider cursor-pointer md:text-4xl"
              onClick={() => navigate('/')}>
              React Challenges
            </h1>
          </div>
          <div className="basis-1/3 flex justify-end items-center pr-4">
            <FaBars
              className="text-3xl cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            />
          </div>
        </div>
      </header>
      {isActive && <Menu isActive={isActive} setIsActive={setIsActive} />}
      <Outlet />
    </>
  );
}
