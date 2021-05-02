import React from "react";
import ReactRouter from "./pages";
import Posts from "./pages/posts";

const App = () => {
  return (
    <div className="App">
      <ReactRouter />

      <Posts />
    </div>
  );
};

export default App;
