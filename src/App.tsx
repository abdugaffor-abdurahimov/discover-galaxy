import React from "react";
import Pages from "./pages";
import { hot } from "react-hot-loader";

const App = () => {
	return (
		<div className="App">
			<Pages />
		</div>
	);
};

export default hot(module)(App);
