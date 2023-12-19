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

  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      let submitBtn = document.getElementById("new-quote");
      submitBtn?.click();
    }
  });  

  return (
    <>
      <main>
        <section id="input-section" className="tile">
          <h3>Submit your predicament:</h3>
          <textarea
            id="predicament"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            ref={inputRef}
            autoFocus
          ></textarea>
          <div id="buttons">
            <button
              type="button"
              id="new-quote"
              className="button"
              onClick={newQuote}
            >
              Submit
            </button>
            <button
              type="button"
              id="new-predicament"
              className="button"
              onClick={clearInput}
            >
              New Predicament
            </button>
          </div>
        </section>
        <section id="quote-section" className="tile">
          <h3>Here is what Oscar has to say:</h3>
          <p id="quote-text">"{quote}"</p>
          <p id="author">- Oscar Wilde</p>
        </section>
      </main>
      <footer className="credits">
        Site design & coding by
        <a href="https://rebeccashoptaw.dev/" target="_blank">
          Rebecca Shoptaw
        </a>
      </footer>
    </>
  );
};

export default AskOscar;
