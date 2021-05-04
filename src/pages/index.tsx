import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";

const Pages = () => (
	<React.Fragment>
		<BrowserRouter>
			{routes.map((route, key) => (
				<Route key={key} exact path={route.path} component={route.component} />
			))}
		</BrowserRouter>
	</React.Fragment>
);

export default Pages;
