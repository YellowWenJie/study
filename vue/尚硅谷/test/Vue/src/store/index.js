import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const count = {
  namespaced: true,
  state: {
    sum: 0
  },
  actions: {
    // add(context, value) {
    //   context.commit("ADD", value);
    // },
    // decrement(context, value) {
    //   context.commit("DECREMENT", value);
    // },
    Odd(context, value) {
      if (context.state.sum % 2 == 0) {
        context.commit("ADD", value);
      }
    },
    addWait(context, value) {
      setTimeout(() => {
        context.commit("ADD", value);
      }, 500);
    }
  },
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    DECREMENT(state, value) {
      state.sum -= value;
    }
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
};
const counts = {
  namespaced: true,
  state: {
    sum: 0
  },
  actions: {
    // add(context, value) {
    //   context.commit("ADD", value);
    // },
    // decrement(context, value) {
    //   context.commit("DECREMENT", value);
    // },
    Odd(context, value) {
      if (context.state.sum % 2 == 0) {
        context.commit("ADD", value);
      }
    },
    addWait(context, value) {
      setTimeout(() => {
        context.commit("ADD", value);
      }, 500);
    }
  },
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    DECREMENT(state, value) {
      state.sum -= value;
    }
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
};

export default new Vuex.Store({
  modules: {
    a: count,
    b: counts
  }
});
