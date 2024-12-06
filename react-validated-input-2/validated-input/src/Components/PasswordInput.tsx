import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export function PasswordInput() {
  const [password, setPassword] = useState('');
  let display = '';

  if (password.length === 0) {
    display = 'A password is required.';
  } else if (password.length < 8) {
    display = 'Your password is too short.';
  } else {
    display = '';
  }

  return (
    <div className="container">
      <label>
        <div className="font-semibold text-xl pl-1">Password</div>
        <div className="flex items-center">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="ring-2 ring-slate-600 rounded-lg h-10 w-60 shadow-lg px-4"
          />
          {display ? (
            <FaX className="ml-4 text-3xl text-red-600" />
          ) : (
            <FaCheck className="ml-4 text-3xl text-lime-600" />
          )}
        </div>
      </label>
      <p className="text-red-600 font-semibold mt-1 pl-1">{display}</p>
    </div>
  );
}
