import { useState } from "react";
import oscarQuotes from "../data/OscarQuotes";
import { useAnimation } from "./useAnimation";

export const useNewQuote = (input: string) => {
  const [quote, setQuote] = useState("Tell me about your troubles.");
  const animate = useAnimation();
  const handleReset = () => setQuote("With what else may I assist you?");

  const handleInput = () => {
    if (input == "") {
      setQuote("Why won't you tell me what ails you??");
    } else {
      setQuote(oscarQuotes[Math.floor(Math.random() * oscarQuotes.length)]);
      animate();
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      handleInput();
    }
  });

  return { quote, handleInput, handleReset };
};
