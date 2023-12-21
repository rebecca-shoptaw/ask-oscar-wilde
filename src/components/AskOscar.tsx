import { useNewQuote } from "../hooks/useNewQuote";
import { useInput } from "../hooks/useInput";

const AskOscar = () => {
  const { input, inputRef, clearInput, handleInputUpdate } = useInput();
  const { quote, handleInput, handleReset } = useNewQuote(input);

  const handleNewPredicament = () => {
    handleReset();
    clearInput();
  };

  return (
    <>
      <main>
        <section id="input-section" className="tile">
          <h3>Submit your predicament:</h3>
          <textarea
            id="predicament"
            onChange={(e) => handleInputUpdate(e.target.value)}
            value={input}
            ref={inputRef}
            autoFocus
          ></textarea>
          <section id="buttons">
            <button
              type="button"
              id="new-quote-btn"
              className="button"
              onClick={handleInput}
            >
              Submit
            </button>
            <button
              type="button"
              id="new-predicament-btn"
              className="button"
              onClick={handleNewPredicament}
            >
              New Predicament
            </button>
          </section>
        </section>
        <section id="quote-section" className="tile">
          <h3>Here is what Oscar has to say:</h3>
          <p id="quote-text">"{quote}"</p>
          <p id="author">- Oscar Wilde</p>
        </section>
      </main>
      <footer className="credits">
        Site design & coding by
        <a rel="author" href="https://rebeccashoptaw.dev/" target="_blank">
          Rebecca Shoptaw
        </a>
      </footer>
    </>
  );
};

export default AskOscar;
