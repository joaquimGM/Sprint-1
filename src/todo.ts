interface Task {
    id: number;
    description: string;
    done: boolean;
  }
  
  class TodoList {
    private tasks: Task[] = [];
  
    addTask(description: string): Task {
      const newTask: Task = {
        id: this.tasks.length + 1,
        description,
        done: false,
      };
      this.tasks.push(newTask);
      return newTask;
    }
  
    markTaskAsDone(id: number): void {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.done = true;
      }
    }
  
    deleteTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    getTasks(): Task[] {
      return this.tasks;
    }
  }
  
  export default TodoList;