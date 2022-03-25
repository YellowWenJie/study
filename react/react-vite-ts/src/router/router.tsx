import React, { ReactNode, lazy } from "react";
// lazy 懒加载
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Page404 = lazy(() => import("../pages/Page404"));

interface IRouter {
  title: string;
  path: string;
  key: string;
  component?: ReactNode;
  children?: IRouter[];
}
export const router: IRouter[] = [
  {
    path: "/dashboard",
    title: "首页",
    key: "dashboard",
    component: <Dashboard />,
  },
];
export const unAuthRouter: IRouter[] = [
  {
    path: "/login",
    title: "登陆",
    key: "login",
    component: <Login />,
  },
  {
    //  一定要加在最后，因为路由匹配是从上往下的
    path: "*",
    title: "404",
    key: "404",
    component: <Page404 />,
  },
];
