import React from "react";
import UseStateHook from "./01-useState";
import UseReducer from "./02-useReducer";
import UseContext from "./03-useContext";
import UseEffect from "./04-useEffect";
import { UsePicture } from "./05-usePicture";

function App() {
  return (
    <div className="App">
      React Hooks
      <h4>useStateHook</h4>
      <UseStateHook />
      <hr />
      <h4>UseReducer</h4>
      <UseReducer />
      <hr />
      <h4>UseContext</h4>
      <UseContext />
      <hr />
      <h4>UseEffect</h4>
      <UseEffect />
      <hr />
      <h4>UsePicture</h4>
      <UsePicture />
    </div>
  );
}

export default App;
