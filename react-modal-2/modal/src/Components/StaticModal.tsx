import { ModalButton } from './ModalButton';

export function StaticModal() {
  return (
    <dialog className="rounded-3xl shadow-lg px-32 py-16 space-y-12">
      <h1 className="font-semibold text-2xl">
        Are you sure you would like to delete?
      </h1>
      <div className="flex justify-around">
        <ModalButton text="Cancel" />
        <ModalButton text="Delete" />
      </div>
    </dialog>
  );
}
