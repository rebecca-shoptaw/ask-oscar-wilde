const Quote = (props: quoteProps) => {
  const { quote } = props;

  return (
    <section id="quote-section" className="tile">
      <h3>Here is what Oscar has to say:</h3>
      <p id="quote-text">"{quote}"</p>
      <p id="author">- Oscar Wilde</p>
    </section>
  );
};

export default Quote;
