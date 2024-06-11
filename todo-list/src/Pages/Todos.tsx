import { Title } from '../Components/Title';
import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';
import { TodoFooter } from '../Components/TodoFooter';
import { useState, useEffect } from 'react';

export type Todo = {
  task: string;
  isCompleted: boolean;
  todoId: string;
};

export function Todos() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('todo-storage');
    const todos = storedData === null ? [] : JSON.parse(storedData);
    setTasks(todos);
  }, []);

  function addTodo(newTodo: Todo) {
    const storedData = localStorage.getItem('todo-storage');
    const todos = storedData === null ? [] : JSON.parse(storedData);
    todos.push(newTodo);
    localStorage.setItem('todo-storage', JSON.stringify(todos));
    setTasks(todos);
  }

  function toggleCompleted(todo: Todo) {
    const storedData = localStorage.getItem('todo-storage');
    const todos = storedData === null ? [] : JSON.parse(storedData);
    todos.forEach((task: Todo) => {
      if (task.todoId === todo.todoId) {
        task.isCompleted = !task.isCompleted;
      }
    });
    localStorage.setItem('todo-storage', JSON.stringify(todos));
    setTasks(todos);
  }

  let remainingTasks = 0;

  tasks.forEach((task: Todo) => {
    if (!task.isCompleted) remainingTasks++;
  });

  return (
    <div className="container">
      <div className="grid place-items-center gap-2">
        <Title title="Todo List" />
        <div className="px-4 w-2/4 shadow-3xl rounded-lg p-12 bg-white">
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={tasks} toggleCompleted={toggleCompleted} />
          <TodoFooter remainingTasks={remainingTasks} />
        </div>
      </div>
    </div>
  );
}
