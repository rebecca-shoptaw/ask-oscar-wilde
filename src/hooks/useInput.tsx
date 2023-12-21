import { useState, useRef } from "react";

export const useInput = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputUpdate = (text: string) => setInput(text);

  const clearInput = () => {
    setInput("");
    inputRef.current?.focus();
  };

  return { input, inputRef, clearInput, handleInputUpdate };
};
