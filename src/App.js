import React from "react";
import UseStateHook from "./01-useState";
import UseReducer from "./02-useReducer";

function App() {
  return (
    <div className="App">
      React Hooks
      <h4>useStateHook</h4>
      <UseStateHook />
      <hr />
      <h4>UseReducer</h4>
      <UseReducer />
    </div>
  );
}

export default App;
