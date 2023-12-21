import { useNewQuote } from "../hooks/useNewQuote";
import { useInput } from "../hooks/useInput";
import Input from "./Input";
import Quote from "./Quote";

const AskOscar = () => {
  const inputInfo = useInput();
  const { quote, handleInput, handleReset } = useNewQuote(inputInfo.input);

  return (
    <>
      <main>
        <Input
          inputInfo={inputInfo}
          handleInput={handleInput}
          handleReset={handleReset}
        />
        <Quote quote={quote} />
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
