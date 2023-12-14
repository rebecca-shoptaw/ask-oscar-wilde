import { useState, useRef } from "react";
import oscarQuotes from "../data/OscarQuotes";

const AskOscar = () => {
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState("Tell me about your troubles.");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const newQuote = () =>
    input == ""
      ? setQuote("Why won't you tell me what ails you??")
      : setQuote(oscarQuotes[Math.floor(Math.random() * oscarQuotes.length)]);

  const clearInput = () => {
    setInput("");
    setQuote("With what else may I assist you?");

    inputRef.current?.focus();
  };

  return (
    <div
      id="quote-box"
      className="d-flex flex-column m-5 justify-content-center"
    >
      <div id="input" className="subdiv p-4 m-3">
        <h3 className="mb-4">Submit your predicament:</h3>
        <textarea
          id="predicament"
          className="input-group input-group-sm mb-3 mt-1"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          ref={inputRef}
          autoFocus
        ></textarea>
        <div id="buttons" className="d-flex flex-row flex-wrap">
          <button
            id="new-quote"
            className="btn btn-secondary"
            onClick={newQuote}
          >
            Submit
          </button>
          <button
            id="new-predicament"
            className="btn btn-secondary"
            onClick={clearInput}
          >
            New Predicament
          </button>
        </div>
      </div>
      <div id="quote" className="subdiv p-4 m-3  d-flex flex-column">
        <h3 className="mb-1">Here is what Oscar has to say:</h3>
        <p id="text" className="quote-text p-3 mb-1 mt-0">
          "{quote}"
        </p>
        <p id="author" className="align-self-end mt-0.5 mb-1">
          - Oscar Wilde
        </p>
      </div>
      <div className="credits">
        Site design & coding by
        <a href="https://rebeccashoptaw.dev/" target="_blank">
          Rebecca Shoptaw
        </a>
      </div>
    </div>
  );
};

export default AskOscar;
