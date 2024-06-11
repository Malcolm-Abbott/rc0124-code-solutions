import { Title } from '../Components/Title';
import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';
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
    console.log(tasks);
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

  return (
    <div className="container">
      <div className="grid place-items-center">
        <div className="px-4">
          <Title title="Todo List" />
          <TodoForm onSubmit={addTodo} />
          <TodoList toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
