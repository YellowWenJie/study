<template>
  <div>
    <h1>{{sum}}</h1>
    <h1>{{bigSum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">偶数加</button>
    <button @click="incrementWait(n)">过一会加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },
    ...mapMutations("a", {
      increment: "ADD",
      decrement: "DECREMENT",
    }),
    incrementOdd() {
      this.$store.dispatch("a/Odd", this.n);
    },
    // incrementWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },
    ...mapActions("a", {
      // incrementOdd: "Odd",
      incrementWait: "addWait",
    }),
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    ...mapState("a", ["sum"]),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    ...mapGetters("a", ["bigSum"]),
  },
};
</script>

<style>
</style>