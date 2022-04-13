<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      todos: [{}, {}],
      newTodo: "",
      editedTodo: null,
      visibility: "all",
    };
  },
};
</script>

<template>
  <div class="container">
    <div>
      <h3>Todo</h3>
      <button>Create Reminder</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: aquamarine;
  height: 1000px;
}
</style>
