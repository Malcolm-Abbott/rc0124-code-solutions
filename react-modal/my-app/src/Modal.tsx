import React, { ReactNode, useRef } from 'react';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modal}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}>
      {children}
    </dialog>
  );
}
