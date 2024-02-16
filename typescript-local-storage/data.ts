/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON) todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', (): void => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
