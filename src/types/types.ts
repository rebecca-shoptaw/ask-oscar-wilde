type InputInfoProps = {
  input: string;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  clearInput: () => void;
  handleInputUpdate: (text: string) => void;
};

export type InputProps = {
  inputInfo: InputInfoProps;
  handleInput: () => void;
  handleReset: Function;
};


export type ControlsProps = {
  handleInput: () => void;
  handleReset: Function;
  clearInput: Function;
};

export type QuoteProps = {
  quote: string;
};

