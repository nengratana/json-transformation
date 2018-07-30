import React from "react";

const InputBox = props => {
  const { input, handleInput } = props;

  return (
    <textarea className="box input" onChange={handleInput} value={input} placeholder="Input JSON Object Here ..." />
  );
};

export default InputBox;
