<script setup lang="ts">
import TodoItem from "@/components/todo/TodoItem.vue";
import TodoHeader from "../components/todo/TodoHeader.vue";
import { mapState, mapActions } from "pinia";
import { useTodoStore } from "@/stores/todo";
</script>

<script lang="ts">
export default {
  methods: {
    ...mapActions(useTodoStore, ["deleteItem"]),
  },
  computed: {
    ...mapState(useTodoStore, ["todos"]),
    completedTodos() {
      return this.todos.filter((todo) => todo.complete);
    },
    unCompletedTodos() {
      return this.todos.filter((todo) => !todo.complete);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container-todo">
      <TodoHeader />
      <div class="body">
        <div style="min-height: 100px">
          <TodoItem
            v-for="todo in unCompletedTodos"
            :key="todo.id"
            :id="todo.id"
            :todoTitle="todo.title"
            :complete="todo.complete"
          />
          <template v-if="!unCompletedTodos.length">
            <p style="text-align: center; margin-top: 40px">No todos left.</p>
          </template>
        </div>

        <div style="min-height: 100px">
          <h4 style="text-align: center">Complete</h4>
          <TodoItem
            v-for="todo in completedTodos"
            :key="todo.id"
            :id="todo.id"
            :todoTitle="todo.title"
            :complete="todo.complete"
          />
          <template v-if="!completedTodos.length">
            <p style="text-align: center; margin-top: 20px">
              No completed todos
            </p>
          </template>
        </div>
      </div>
    </div>
    <div>Created with 💔</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  flex-direction: column;
}

.container-todo {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 500px;
  min-height: 400px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  margin: 2rem 0px;
}
</style>
