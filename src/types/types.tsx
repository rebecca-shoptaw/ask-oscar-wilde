type inputProps = {
  inputInfo: inputInfoProps;
  handleInput: () => void;
  handleReset: Function;
};

type inputInfoProps = {
  input: string;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  clearInput: () => void;
  handleInputUpdate: (text: string) => void;
};

type controlsProps = {
  handleInput: () => void;
  handleReset: Function;
  clearInput: Function;
};

type quoteProps = {
  quote: string;
};
