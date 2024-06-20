import { Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="h-24 bg-gradient-to-r from-slate-900 to-slate-700 grid place-items-center shadow-lg">
        <h1 className="font-semibold text-3xl text-white">React Forms</h1>
      </div>
      <Outlet />
    </>
  );
}
