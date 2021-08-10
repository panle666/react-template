import { HaHa } from "../views/haha/haha";
import { Home } from "../views/home/home";
import { IRouteConfig } from "./IRouteConfig";

export const routeConfigs: IRouteConfig[] = [
  {
    path: "/home",
    title: "home",
    component: Home,
    isDev: true,
    //   children: [
    //     {
    //       path: "",
    //       component: "",
    //     },
    //   ],
  },
  {
    path: "/haha",
    title: "haha",
    component: HaHa,
  },
];
