import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

export function NavBar() {
  return (
    <>
      <header className="shadow-lg flex py-4 text-white bg-gradient-to-r from-slate-900 to-slate-800 min-h-24 lg:min-h-28">
        <div className="w-full flex">
          <div className="basis-1/3"></div>
          <div className="basis-1/3 flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-center tracking-wider md:text-4xl">
              React Challenges
            </h1>
          </div>
          <div className="basis-1/3 flex justify-end items-center pr-4">
            <FaBars className="text-3xl cursor-pointer" />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
