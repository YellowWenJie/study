import { reqGetSearchInfo } from "@/api";

//search
const state = {
  searchList: {}
};
//actions可以书写自己的业务逻辑，最后提交到mutations
const actions = {
  //获取search模板数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  }
};
//mutations修改state的唯一手段
const mutations = {
  GETSEARCHLIST(state, SearchList) {
    state.searchList = SearchList;
  }
};
//getters理解为计算属性
const getters = {
  goodsList(state) {
    //state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
    //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
    //计算新的属性的属性值至少给人家来一个数组
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  }
};
export default {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters
};
