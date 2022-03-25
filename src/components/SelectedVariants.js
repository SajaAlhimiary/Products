import React from "react";

const SelectedVariants = ({ variant }) => {
  return (
    <div className="variants">
      <div>Selected Variants</div>
      <p>{variant}</p>
    </div>
  );
};

export default SelectedVariants;
