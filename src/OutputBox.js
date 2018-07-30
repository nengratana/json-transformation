import React from "react";

const OutputBox = props => {
  const { output, error, clean } = props;

  return (
    <textarea
      className={(error ? "error " : "") + "box output"}
      value={error || clean ? output : JSON.stringify(output, null, 4)}
      disabled
    />
  );
};

export default OutputBox;
