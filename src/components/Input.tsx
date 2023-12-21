import Controls from "./Controls";

const Input = (props: inputProps) => {
  const { inputInfo, handleInput, handleReset } = props;
  const { input, inputRef, clearInput, handleInputUpdate } = inputInfo;

  return (
    <section id="input-section" className="tile">
      <h3>Submit your predicament:</h3>
      <textarea
        id="predicament"
        onChange={(e) => handleInputUpdate(e.target.value)}
        value={input}
        ref={inputRef}
        autoFocus
      ></textarea>
      <Controls
        handleInput={handleInput}
        handleReset={handleReset}
        clearInput={clearInput}
      />
    </section>
  );
};

export default Input;
