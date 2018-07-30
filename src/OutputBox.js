import React from "react";

const OutputBox = props => {
  const { output } = props;

  return (
    <div>
      <textarea
        className="box output"
        value={JSON.stringify(output, null, 2)}
        disabled
      />
    </div>
  );
};

export default OutputBox;
