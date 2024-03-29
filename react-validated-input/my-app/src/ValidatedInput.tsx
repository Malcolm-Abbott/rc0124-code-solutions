import './ValidatedInput.css';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const confirm = <FaCheck className="confirm" />;
const cancel = <FaX className="cancel" />;
const icons = ['', confirm, cancel];

export function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState(0);

  function handleFocus() {
    if (!password) {
      setMessage('A password is required.');
      setIndex(2);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    const length = event.target.value.length;
    if (length === 1) {
      setMessage('Your password is too short.');
      setIndex(2);
    } else if (length === 8) {
      setMessage('');
      setIndex(1);
    } else if (length === 7) {
      setMessage('Your password is too short.');
      setIndex(2);
    } else if (length === 0) {
      setMessage('A password is required.');
      setIndex(2);
    }
  }

  return (
    <>
      <label>
        Password
        <div className="input-wrapper">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}></input>
          <span>{icons[index]}</span>
        </div>
      </label>
      <p>{message}</p>
    </>
  );
}
