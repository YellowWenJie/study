<!--
 * @Author: 黄文杰
 * @Date: 2022-08-08 13:29:08
 * @LastEditTime: 2022-08-08 13:47:06
-->
<template>
  <Demo @hello="showHelloMsg" msg1="信息1" msg2="信息2">
    <template v-slot:slot01>
      <span>插槽1</span>
    </template>
    <template v-slot:slot02>
      <span>插槽2</span>
    </template>
  </Demo>
</template>
 
<script lang="ts">
import Demo from "./testChild.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value:any) {
      alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>