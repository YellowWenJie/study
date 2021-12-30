//对API进行统一管理
import requests from "./request";

//三级联动接口
//  /api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () => {
  //发请求:axios 发请求返回的都是Promise对象
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};
