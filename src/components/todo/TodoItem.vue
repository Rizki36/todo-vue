<template>
  <div class="container">
    <input id="id" type="checkbox" :value="complete" @input="handleInput" />
    <label role="button" :class="{ checked: complete }" for="id">
      <IconCheck
    /></label>

    <div>
      <h3>{{ todoTitle }} - {{ complete }}</h3>
    </div>

    <div class="actions">
      <button class="btn" @click="deleteItem(id)">x</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { mapActions } from "pinia";
import IconCheck from "../icons/IconCheck.vue";
</script>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    todoTitle: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapActions(useTodoStore, ["setComplete", "deleteItem"]),
    handleInput() {
      this.setComplete(this.id, !this.complete);
    },
  },
};
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  position: relative;
  border: 1px #d1d7dc solid;
  border-radius: 10px;
  min-height: 50px;
  padding: 10px 15px 10px 10px;
  margin: 10px 0;
}

label {
  cursor: pointer;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  background-color: #ece7e7;
  border-radius: 50%;
  color: #ece7e7;
  position: relative;
}

label:not(.checked)::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
}

label.checked {
  background-color: rgb(237, 237, 237);
  color: #525252;
}
input {
  visibility: hidden;
}

.actions {
  flex: 1;
  /* justify-items: end; */
  display: flex;
  justify-content: right;
}

.btn {
  border-radius: 5px;
  color: white;
  margin: 0;
  cursor: pointer;
  outline: none;
  border: none;
  height: 30px;
  width: 30px;
  background-color: #d1d7dc;
}
</style>
