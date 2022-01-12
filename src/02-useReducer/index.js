import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "buttonClick":
      return { ...state, count: state.count + 1 };
    case "setUserName":
      return { ...state, username: action.username };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, username: "" });
  return (
    <div>
      <button onClick={(e) => dispatch({ type: "buttonClick" })}>
        Click Me
      </button>
      Current Count is {state.count}
      <input
        type="text"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "setUserName", username: e.target.value })
        }
      />
      Your username is {state.username}
    </div>
  );
};

export default UseReducer;
