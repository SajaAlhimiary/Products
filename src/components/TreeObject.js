import React, { useState } from "react";
import TreeView from "./TreeView";
import SelectedVariants from "./SelectedVariants";

const TreeObject = ({ object }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState([]);

  const handleCheck = () => {
    setChecked(!checked);
    checked
      ? setSelectedVariants(selectedVariants.push(object.label))
      : setSelectedVariants(selectedVariants);
    <SelectedVariants variants={selectedVariants} />;
  };

  const hasChild = object.children ? true : false;

  return (
    <div>
      <li className="d-tree-object border-0">
        <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
          {hasChild && (
            <div
              className={`d-inline d-tree-toggler ${
                childVisible ? "active" : ""
              }`}
            ></div>
          )}
          <div className="col d-tree-head">
            <input type="checkbox" checked={checked} onChange={handleCheck} />
            {object.label}
            <h6 className="d-tree-quantity">{object.quantity}</h6>
          </div>
        </div>

        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <TreeView data={object.children} />
            </ul>
          </div>
        )}
      </li>
    </div>
  );
};

export default TreeObject;
