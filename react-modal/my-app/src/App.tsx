import './App.css';
import { Modal } from './Modal';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        type="button"
        className="delete"
        onClick={() => setIsActive(true)}>
        Delete Me!
      </button>
      <Modal onClose={() => setIsActive(false)} isOpen={isActive}>
        <div className="modal-content">
          <p>Do you want to delete?</p>
          <button
            type="button"
            className="cancel"
            onClick={() => setIsActive(false)}>
            Cancel
          </button>
          <button
            type="button"
            className="delete"
            onClick={() => {
              alert('Deleted!');
              setIsActive(false);
            }}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
