import { ModalButton } from './ModalButton';
import { useEffect, useRef } from 'react';

type Props = {
  isActive: boolean;
  setIsActive: (arg1: boolean) => void;
};

export function StaticModal({ isActive, setIsActive }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    isActive ? openModal() : closeModal();
  }, [isActive]);

  function openModal() {
    modal.current?.showModal();
  }

  function closeModal() {
    modal.current?.close();
  }

  return (
    <dialog
      className="rounded-3xl shadow-lg px-32 py-16 space-y-12"
      ref={modal}>
      <h1 className="font-semibold text-2xl">
        Are you sure you would like to delete?
      </h1>
      <div className="flex justify-around">
        <ModalButton text="Cancel" modalHandler={() => setIsActive(false)} />
        <ModalButton text="Delete" modalHandler={() => setIsActive(false)} />
      </div>
    </dialog>
  );
}
