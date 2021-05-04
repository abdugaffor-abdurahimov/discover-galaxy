import React, { ElementType, ComponentType } from "react";
import Home from "./Home";
import Posts from "./posts";

interface IRouter {
	path: string;
	component: ComponentType;
	layout?: ElementType;
}

const routes: IRouter[] = [
	{ path: "/", component: Home },
	{ path: "/posts", component: Posts },
];

export default routes;
