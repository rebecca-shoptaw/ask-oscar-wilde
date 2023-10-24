import { useState } from "react";

const DisplayMessage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([] as string[]);
  const addMessage = () => {
    setMessages(messages.concat(input));
    setInput("");
  };
  const clearMessages = () => {
    setMessages([] as string[]);
    setInput("");
  };
  const clearInput = () => setInput("");

  return (
    <div
      id="display-message"
      className="d-flex flex-column m-5 justify-content-center"
    >
      <div id="input" className="subdiv p-4 m-3">
        <h2 className="mb-3">enter your message:</h2>
        <input
          className="input-group input-group-sm mb-3 "
          onChange={(event) => setInput(event.target.value)}
          value={input}
        ></input>
        <button className="btn btn-secondary" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div id="messages" className="subdiv p-4 m-3  d-flex flex-column">
        <h2>messages:</h2>
        <ul className="list-group mb-3">
          {messages.map((message) => (
            <li className="list-group-item">{message}</li>
          ))}
        </ul>
        <button
          className="btn btn-secondary align-self-baseline mt-auto"
          onClick={clearMessages}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default DisplayMessage;
