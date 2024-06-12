type Props = {
  remainingTasks: number;
  setFilter: (arg1: string) => void;
};

export function TodoFooter({ remainingTasks, setFilter }: Props) {
  return (
    <div className="py-3 ring-1 ring-gray-200 rounded-md mt-16 flex">
      <div className="basis-1/3 px-4">{remainingTasks} Remaining Tasks</div>
      <div className="basis-1/3 flex divide-x-2 border-r-2 border-gray-200 cursor-pointer">
        <div
          className="basis-1/3 text-center border-l-2 border-gray-200"
          onClick={() => setFilter('all')}>
          all
        </div>
        <div
          className="basis-1/3 text-center"
          onClick={() => setFilter('active')}>
          active
        </div>
        <div
          className="basis-1/3 text-center"
          onClick={() => setFilter('complete')}>
          complete
        </div>
      </div>
      <div className="px-4 basis-1/3 flex justify-end">
        <button>Clear Completed</button>
      </div>
    </div>
  );
}

// const saveClass = 'py-3 px-8';
