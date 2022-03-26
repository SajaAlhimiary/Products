import React from "react";

const SelectedVariants = ({ variants = [] }) => {
  return (
    <div className="variants">
      <div>Selected Variants</div>
      <p>
        {variants.map((variant, v) => (
          <h6 key={v}>{variant}</h6>
        ))}
      </p>
    </div>
  );
};

export default SelectedVariants;
