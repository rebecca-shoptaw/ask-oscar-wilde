import { useState } from "react";
import oscarQuotes from "../data/OscarQuotes";
import { useAnimation } from "./useAnimation";

export const useNewQuote = (input: string) => {
  const [quote, setQuote] = useState("Tell me about your troubles.");
  const animateNewQuote = useAnimation();
  const handleReset = () => {
    setQuote("With what else may I assist you?");
    animateNewQuote("#new-predicament-btn");
  };

  const handleInput = () => {
    if (input == "") {
      setQuote("Why won't you tell me what ails you??");
    } else {
      setQuote(oscarQuotes[Math.floor(Math.random() * oscarQuotes.length)]);
    }
    animateNewQuote("#new-quote-btn");
  };

  return { quote, handleInput, handleReset };
};
