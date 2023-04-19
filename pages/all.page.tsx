import React from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import { Home } from './home'
import { About } from "./about";

const routerList: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const Page = () => {
  return useRoutes(routerList);
};

export { Page };