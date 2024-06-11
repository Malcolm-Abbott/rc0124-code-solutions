import type { Todo } from '../Pages/Todos';
import './TodoList.css';

type Props = {
  toggleCompleted: (todo: Todo) => void;
  todos: Todo[];
};

export function TodoList({ toggleCompleted, todos }: Props) {
  return (
    <ul className="border rounded border-gray-300 divide-y">
      {todos.map((todo: Todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.todoId}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </ul>
  );
}

type TodoProps = {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
};

function TodoItem({ todo, toggleCompleted }: TodoProps) {
  const { task, isCompleted } = todo;
  const completedClass = isCompleted ? 'is-completed' : '';

  return (
    <li className="py-3 px-8 -mb-px border-r-0 border-l-0 border-gray-300">
      <div>
        <label className={`text-gray-700 pl-2 ${completedClass}`}>
          <input
            type="checkbox"
            defaultChecked={isCompleted}
            className="mt-1 -ml-6 mr-2"
            onChange={() => toggleCompleted(todo)}
          />
          {task}
        </label>
      </div>
    </li>
  );
}
