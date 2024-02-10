import React from "react";
import DropArea from "./DropArea";

const DropField = ({
  label,
  fieldFunction,
  droppedElements,
  setDroppedElements,
  isMulti,
}) => {
  return (
    <div>
      <div className="flex items-center">
        <label className="w-24">{label}</label>
        <DropArea
          fieldFunction={fieldFunction}
          droppedElements={droppedElements}
          setDroppedElements={setDroppedElements}
          isMulti={isMulti}
        />
      </div>
    </div>
  );
};

export default DropField;
