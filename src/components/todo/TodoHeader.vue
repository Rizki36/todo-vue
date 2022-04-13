<template>
  <header>
    <input v-model="title" class="input" type="text" />
    <button class="btn" @click="handleClick">Create Reminder</button>
  </header>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { mapActions } from "pinia";
</script>

<script lang="ts">
export default {
  data: function () {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(useTodoStore, ["add"]),
    handleClick() {
      this.add(this.title, []);
    },
  },
};
</script>

<style scoped>
.input {
  /* reset input css */
  border: 2px solid #d1d7dc;
  border-radius: 5px;
  outline: none;
  background: none;
  padding: 10px;
  margin: 0 10px 0 0;
  flex: 1;
}

.btn {
  /* reset button css */
  border: 2px solid #3a3a3c;
  background: #3a3a3c;
  border-radius: 5px;
  color: white;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  outline: none;
}
</style>
