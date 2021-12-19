<template>
  <div class="hello">
    <div class="todo-container">
      <div class="todo-wrap">
        <HyHeader :addTodos="addTodo" />
        <MyList :todos="tools" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter :tools="tools" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import HyHeader from "./MyHeader.vue";
import MyList from "./MyList.vue";
import MyFooter from "./MyFooter.vue";
export default {
  name: "HelloWorld",
  components: { HyHeader, MyList, MyFooter },
  data() {
    return {
      tools: [
        { id: "001", title: "黄文杰", done: true },
        { id: "002", title: "彭于晏", done: false },
        { id: "003", title: "黄礼志", done: true },
      ],
    };
  },
  methods: {
    //增
    addTodo(todoObj) {
      this.tools.unshift(todoObj);
    },
    //勾选与取消勾选
    checkTodo(id) {
      this.tools.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      this.tools = this.tools.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选与取消全选
    checkAllTodo(done) {
      this.tools.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.tools = this.tools.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    tools(value) {
      localStorage.setItem("tools", JSON.stringify(value));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
