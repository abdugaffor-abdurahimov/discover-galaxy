import { ElementType, ComponentType } from "react";
import Posts from "./posts";

interface IRouter {
  path: string;
  component: ComponentType;
  isProtected: boolean;
  layout?: ElementType;
}

const routes: IRouter[] = [
  { path: "/", isProtected: false, component: Posts },

  { path: "/posts", component: Posts, isProtected: false },
];

export default routes;
