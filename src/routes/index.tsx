/*
 * @Author: wxy
 * @Description:
 * @Date: 2023-04-10 10:25:00
 * @LastEditTime: 2023-04-19 10:03:49
 */
import { useRoutes, RouteObject } from "react-router-dom";
import { About } from "@pages/about";
import { Page } from "@pages/index";

const routerList: RouteObject[] = [
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const RouterContainer = () => {
  return useRoutes(routerList);
};
