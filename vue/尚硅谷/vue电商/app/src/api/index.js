//对API进行统一管理
import requests from "./ajax";
import mockRequests from "./mockAjax";

//三级联动接口
//  /api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () => {
  //发请求:axios 发请求返回的都是Promise对象
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};

//获取首页轮播图banner
export const reqBannerList = () => {
  //发请求:axios 发请求返回的都是Promise对象
  return mockRequests({ url: "/banner", method: "get" });
};

//获取floor数据
export const reqFloorList = () => {
  //发请求:axios 发请求返回的都是Promise对象
  return mockRequests({ url: "/floor", method: "get" });
};
