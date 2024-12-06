import { Input } from './Input';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

export function Password() {
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  let display;
  switch (true) {
    case password.length < 1:
      display = 'A Password is required.';
      break;
    case password.length < 8:
      display = 'Your password is too short.';
      break;
  }

  const toggleActive = isActive ? '' : 'hidden';

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <label>
          <div className="font-semibold text-2xl mb-1">Password</div>
          <div className="flex gap-x-6 items-center">
            <Input
              type="password"
              name="password"
              value={password}
              setValue={setPassword}
              setIsActive={setIsActive}
            />
            {isActive && password.length < 8 ? (
              <FaX className="text-3xl text-red-500" />
            ) : (
              <FaCheck className={`text-3xl text-green-500 ${toggleActive}`} />
            )}
          </div>
          {isActive ? (
            <div className="text-red-500 text-xl font-semibold mt-1">
              {display}
            </div>
          ) : (
            <div className="text-red-500 text-xl font-semibold mt-1"></div>
          )}
        </label>
      </div>
    </div>
  );
}
