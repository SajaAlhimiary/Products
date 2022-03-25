import TreeObject from "./TreeObject";
import SelectedVariants from "./SelectedVariants";

const TreeView = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((TreeView) => (
          <TreeObject object={TreeView} />
        ))}
      </ul>
      <SelectedVariants variant={data.variant} />
    </div>
  );
};

export default TreeView;
