import { defineStore } from "pinia";

export interface Todo {
  id: string;
  title: string;
  complete: boolean;
  categories: string[];
}
export type RootState = {
  todos: Todo[];
};

export const useTodoStore = defineStore({
  id: "todo",

  state: () =>
    ({
      todos: [],
    } as RootState),
  getters: {},
  actions: {
    add(title: string, categories: string[]) {
      // random string id
      const id = Math.random().toString(36).substr(2, 9);

      this.todos.push({
        id,
        title,
        categories,
        complete: false,
      });
    },
    deleteItem(id: string) {
      const index = this.findIndexById(id);
      if (index === -1) return;

      this.todos.splice(index, 1);
    },
    update(id: string, data: Todo) {
      const index = this.findIndexById(id);
      if (index === -1) return;

      this.todos[index] = data;
    },
    setComplete(id: string, isComplete: boolean) {
      const index = this.findIndexById(id);

      if (index === -1) return;
      this.todos[index].complete = isComplete;
    },
    addCategory(id: string, newCategory: string) {
      const index = this.findIndexById(id);
      if (index === -1) return;

      this.todos[index].categories.push(newCategory);
    },
    removeCategory(id: string, index: number) {
      const todoIndex = this.findIndexById(id);
      if (todoIndex === -1) return;

      this.todos[todoIndex].categories.splice(index, 1);
    },
    findIndexById(id: string) {
      if (!id) throw "Id requried";

      return this.todos.findIndex((item) => item.id === id);
    },
  },
});
