import { makeAutoObservable } from 'mobx';

export interface Todo {
  id: number;
  text: string;
}

export class TodoStore {
  todos: Todo[] = [];
  nextId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (text: string) => {
    this.todos.push({ id: this.nextId++, text });
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };
}

export const todoStore = new TodoStore();
