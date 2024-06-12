type Props = {
  remainingTasks: number;
  setFilter: (arg1: string) => void;
  filter: string;
};

export function TodoFooter({ remainingTasks, setFilter, filter }: Props) {
  return (
    <div className="py-3 ring-1 ring-gray-200 rounded-md mt-16 flex">
      <div className="basis-1/3 px-4">{remainingTasks} Remaining Tasks</div>
      <div className="basis-1/3 flex divide-x-2 border-r-2 border-gray-200 cursor-pointer">
        <div
          className={
            filter === 'all'
              ? 'basis-1/3 text-center border-l-2 border-gray-200 bg-blue-700 text-white'
              : 'basis-1/3 text-center border-l-2 border-gray-200'
          }
          onClick={() => setFilter('all')}>
          all
        </div>
        <div
          className={
            filter === 'active'
              ? 'basis-1/3 text-center bg-blue-700 text-white'
              : 'basis-1/3 text-center'
          }
          onClick={() => setFilter('active')}>
          active
        </div>
        <div
          className={
            filter === 'complete'
              ? 'basis-1/3 text-center bg-blue-700 text-white'
              : 'basis-1/3 text-center'
          }
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
