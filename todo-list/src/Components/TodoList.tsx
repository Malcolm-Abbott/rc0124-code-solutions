import type { Todo } from '../Pages/Todos';
import './TodoList.css';

export function TodoList() {
  const storedData = localStorage.getItem('todo-storage');
  const todos = storedData === null ? [] : JSON.parse(storedData);
  console.log('todos TodoList:', todos);

  return (
    <ul className="border rounded border-gray-300 divide-y">
      {todos.map((todo: Todo) => {
        return <TodoItem todo={todo} key={todo.todoId} />;
      })}
    </ul>
  );
}

type TodoProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoProps) {
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
          />
          {task}
        </label>
      </div>
    </li>
  );
}
