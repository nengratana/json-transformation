import React from "react";

const InputBox = props => {
  const { input, handleInput } = props;

  return (
    <div>
      <textarea className="box input" onChange={handleInput} value={input} />
    </div>
  );
};

export default InputBox;
