import React, { useState } from "react";
import TreeView from "./TreeView";

const TreeObject = ({ object }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [checked, setChecked] = useState(false);
  const [variant, setVariant] = useState("");

  const handleCheck = () => {
    setChecked(!checked);
    checked ? setVariant(variant + ", " + object.label) : setVariant(variant);
    // console.log(variant);
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
            <h6>{object.quantity}</h6>
          </div>
        </div>

        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <TreeView data={object.children} variant={variant} />
            </ul>
          </div>
        )}
      </li>
    </div>
  );
};

export default TreeObject;
