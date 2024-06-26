import type { Todo } from '../Pages/Todos';
import { FaTrash } from 'react-icons/fa';
import './TodoList.css';
import React, { useState } from 'react';

type Props = {
  toggleCompleted: (todo: Todo) => void;
  todos: Todo[];
  deleteTodo: (todo: Todo) => void;
  searchValue: string;
  setTasks: (arg1: Todo[]) => void;
};

export function TodoList({
  toggleCompleted,
  todos,
  deleteTodo,
  searchValue,
  setTasks,
}: Props) {
  function moveTaskUp(todo: Todo) {
    const index = todos.indexOf(todo);
    if (index === 0) return;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    updatedTodos.splice(index - 1, 0, todo);
    localStorage.setItem('todo-storage', JSON.stringify(updatedTodos));
    setTasks(updatedTodos);
  }

  function moveTaskDown(todo: Todo) {
    const index = todos.indexOf(todo);
    if (index === todos.length - 1) return;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    updatedTodos.splice(index + 1, 0, todo);
    localStorage.setItem('todo-storage', JSON.stringify(updatedTodos));
    setTasks(updatedTodos);
  }

  if (searchValue.length > 0) {
    return (
      <ul className="border rounded border-gray-300 divide-y">
        {todos.map((todo: Todo) => {
          if (todo.task.toLowerCase().includes(searchValue.toLowerCase())) {
            return (
              <TodoItem
                todo={todo}
                key={todo.todoId}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
                moveTaskUp={moveTaskUp}
                moveTaskDown={moveTaskDown}
              />
            );
          }
        })}
      </ul>
    );
  }

  return (
    <ul className="border rounded border-gray-300 divide-y">
      {todos.map((todo: Todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.todoId}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        );
      })}
    </ul>
  );
}

type TodoProps = {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  moveTaskUp: (arg1: Todo) => void;
  moveTaskDown: (arg1: Todo) => void;
};

function TodoItem({
  todo,
  toggleCompleted,
  deleteTodo,
  moveTaskUp,
  moveTaskDown,
}: TodoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { task, isCompleted } = todo;
  const completedClass = isCompleted ? 'is-completed' : '';

  function handleKeyUp(event: React.KeyboardEvent, todo: Todo) {
    if (event.key === 'ArrowUp') moveTaskUp(todo);
    if (event.key === 'ArrowDown') moveTaskDown(todo);
    if (event.key !== 'Enter') return;
    toggleCompleted(todo);
  }

  return (
    <li
      className="py-3 px-8 -mb-px border-r-0 border-l-0 border-gray-300 flex justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div>
        <label className={`text-gray-700 pl-2 ${completedClass}`}>
          <input
            type="checkbox"
            checked={isCompleted}
            className="mt-1 -ml-6 mr-2 "
            onChange={() => toggleCompleted(todo)}
            onKeyUp={(e) => handleKeyUp(e, todo)}
          />
          {task}
        </label>
      </div>
      {isHovered ? (
        <FaTrash
          color="red"
          className="cursor-pointer"
          onClick={() => deleteTodo(todo)}
        />
      ) : null}
    </li>
  );
}
