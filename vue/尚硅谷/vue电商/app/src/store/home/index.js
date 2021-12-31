//home
import { reqCategoryList } from "@/api";
const state = {
  categoryList: []
};
//actions可以书写自己的业务逻辑，最后提交到mutations
const actions = {
  //通过api里面的接口函数调用，向服务器发请求
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  }
};
//mutations修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList.slice(0, 16);
  }
};
//getters理解为计算属性
const getters = {};
export default {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters
};
