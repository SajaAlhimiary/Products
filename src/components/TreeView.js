import TreeObject from "./TreeObject";

const TreeView = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((TreeView) => (
          <TreeObject object={TreeView} />
        ))}
      </ul>
    </div>
  );
};

export default TreeView;
