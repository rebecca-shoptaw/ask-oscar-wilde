import { useState } from "react";
import oscarQuotes from "../data/OscarQuotes";

export const useNewQuote = (input: string) => {
  const [quote, setQuote] = useState("Tell me about your troubles.");
  const handleReset = () => setQuote("With what else may I assist you?");
  const handleInput = () =>
    input == ""
      ? setQuote("Why won't you tell me what ails you??")
      : setQuote(oscarQuotes[Math.floor(Math.random() * oscarQuotes.length)]);

  return { quote, handleInput, handleReset };
};
