import TodoList from '../src/todo';

test('Agregar tarea a la lista', () => {
  const todoList = new TodoList();
  const newTask = todoList.addTask('Hacer compras');

  expect(newTask.id).toBe(1);
  expect(newTask.description).toBe('Hacer compras');
  expect(newTask.done).toBe(false);
});

test('Marcar tarea como hecha', () => {
  const todoList = new TodoList();
  const newTask = todoList.addTask('Hacer compras');

  todoList.markTaskAsDone(newTask.id);

  expect(newTask.done).toBe(true);
});

test('Eliminar tarea de la lista', () => {
  const todoList = new TodoList();
  const task1 = todoList.addTask('Hacer compras');
  const task2 = todoList.addTask('Estudiar');

  todoList.deleteTask(task1.id);

  const tasks = todoList.getTasks();

  expect(tasks).toHaveLength(1);
  expect(tasks[0].id).toBe(task2.id);
});