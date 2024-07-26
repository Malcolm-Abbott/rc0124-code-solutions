import { FaCircleXmark } from 'react-icons/fa6';
import { ValidatedInput } from './ValidatedInput';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';

export function ValidatedInputPage() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const styleDisplay = isFocused ? '' : 'hidden';
  let message = '';

  switch (true) {
    case value.length === 0:
      message = 'A password is required.';
      break;
    case value.length < 8:
      message = 'Your password is too short.';
      break;
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-semibold tracking-wide px-2 mb-1">
          Password
        </h1>
        <div className="flex items-center gap-x-6">
          <ValidatedInput
            value={value}
            setValue={setValue}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
          {value.length < 8 ? (
            <FaCircleXmark
              className={`text-red-600 text-4xl ${styleDisplay}`}
            />
          ) : (
            <CiCircleCheck
              className={`text-white bg-green-600 rounded-full text-4xl ${styleDisplay}`}
            />
          )}
        </div>
        <p
          className={`text-2xl font-semibold text-red-600 px-2 mt-4 ${styleDisplay}`}>
          {message}
        </p>
      </div>
    </div>
  );
}
