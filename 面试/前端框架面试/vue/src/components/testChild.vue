<template>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
  <slot name="slot01"></slot>
  <slot name="slot02"></slot>
</template>
 
<script lang="ts">import { ref } from "vue";

export default {
  name: 'Demo',
  props: ['msg1'],
  emits: ['hello'],
  setup(props: any, context: { attrs: any; emit: (arg0: string, arg1: number) => void; slots: any }) {

    let data  = ref(0)
    //方法
    function test() {
      data.value++
      context.emit('hello', 666)
      console.log(data.value)
    }
    //返回一个对象（常用）
    return {
      test,
      data,
    }
  }
}
</script>