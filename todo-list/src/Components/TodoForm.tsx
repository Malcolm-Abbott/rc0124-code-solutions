import { type FormEvent, useState } from 'react';
import type { Todo } from '../Pages/Todos';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  onSubmit: (todo: Todo) => void;
};

export function TodoForm({ onSubmit }: Props) {
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newTodo = {
      task,
      isCompleted: false,
      todoId: uuidv4(),
    };
    onSubmit(newTodo);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="py-1 px-2 mb-2 text-gray-800 border border-gray-200"
        placeholder="Task to Execute"
      />
    </form>
  );
}
