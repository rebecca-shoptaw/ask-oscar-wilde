import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Quote = (props: quoteProps) => {
  const { quote } = props;

  return (
    <section id="quote-section" className="tile">
      <h3>Here is what Oscar has to say:</h3>
      <section id="quote">
        <p id="quote-text">"{quote}"</p>
      </section>
      <p id="author">- Oscar Wilde</p>
    </section>
  );
};

export default Quote;
