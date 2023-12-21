const Controls = (props: controlsProps) => {
  const { handleInput, handleReset, clearInput } = props;

  const handleNewPredicament = () => {
    handleReset();
    clearInput();
  };

  return (
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
  );
};

export default Controls;
