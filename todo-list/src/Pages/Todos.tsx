import { Title } from '../Components/Title';
import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';

export type Todo = {
  task: string;
  isCompleted: boolean;
  todoId: string;
};

export function Todos() {
  function addTodo(newTodo: Todo) {
    const storedData = localStorage.getItem('todo-storage');
    const todos = storedData === null ? [] : JSON.parse(storedData);
    todos.push(newTodo);
    localStorage.setItem('todo-storage', JSON.stringify(todos));
  }

  return (
    <div className="container">
      <div className="grid place-items-center">
        <div className="px-4">
          <Title title="Todo List" />
          <TodoForm onSubmit={addTodo} />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
