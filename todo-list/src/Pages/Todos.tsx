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
  const [filter, setFilter] = useState('all');

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

  function deleteCompleted() {
    const storedData = localStorage.getItem('todo-storage');
    if (storedData === null) return;
    const todos = storedData === null ? [] : JSON.parse(storedData);
    const incompleteTodos = todos.filter((todo: Todo) => !todo.isCompleted);
    localStorage.setItem('todo-storage', JSON.stringify(incompleteTodos));
    setTasks(incompleteTodos);
  }

  let remainingTasks = 0;

  tasks.forEach((task: Todo) => {
    if (!task.isCompleted) remainingTasks++;
  });

  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  const completeTasks = tasks.filter((task) => task.isCompleted);

  let displayableTasks;
  switch (true) {
    case filter === 'all':
      displayableTasks = tasks;
      break;
    case filter === 'active':
      displayableTasks = incompleteTasks;
      break;
    case filter === 'complete':
      displayableTasks = completeTasks;
      break;
  }

  return (
    <div className="container">
      <div className="grid place-items-center gap-2">
        <Title title="Todo List" />
        <div className="px-4 w-2/4 shadow-3xl rounded-lg p-12 bg-white">
          <TodoForm onSubmit={addTodo} />
          <TodoList
            todos={displayableTasks !== undefined ? displayableTasks : tasks}
            toggleCompleted={toggleCompleted}
          />
          <TodoFooter
            remainingTasks={remainingTasks}
            setFilter={setFilter}
            filter={filter}
            deleteCompleted={deleteCompleted}
          />
        </div>
      </div>
    </div>
  );
}
