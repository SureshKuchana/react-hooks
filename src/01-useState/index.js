import React, { useState } from "react";
import { Status } from "./status";

const UseStateHook = () => {
  const [messages, setMessages] = useState(["test", "test2"]);

  return (
    <div>
      <Status onEnter={(value) => setMessages([value, ...messages])} />
      {/* <ul>{messages && messages.map((msg) => <li key={msg}>{msg}</li>)}</ul> */}
      <ul>
        {messages &&
          React.Children.toArray(messages.map((msg) => <li>{msg}</li>))}
      </ul>
    </div>
  );
};

export default UseStateHook;
