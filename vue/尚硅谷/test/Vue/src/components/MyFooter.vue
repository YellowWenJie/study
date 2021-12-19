<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成:{{doneTotal}}</span>
      / 全部:{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["tools", "checkAllTodo", "clearAllTodo"],
  methods: {
    clearAll() {
      this.clearAllTodo();
    },
  },
  computed: {
    total() {
      return this.tools.length;
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
    doneTotal() {
      return this.tools.reduce((pre, tools) => {
        return pre + (tools.done ? 1 : 0);
      }, 0);
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>