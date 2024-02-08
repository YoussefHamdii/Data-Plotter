import React from "react";
import DropArea from "./DropArea";

const DropField = ({ label, droppedElements, setDroppedElements, isMulti }) => {
  return (
    <div className="flex items-center">
      <label className="w-24">{label}</label>
      <DropArea
        droppedElements={droppedElements}
        setDroppedElements={setDroppedElements}
        isMulti={isMulti}
      />
    </div>
  );
};

export default DropField;
