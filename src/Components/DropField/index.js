import React from "react";
import DropArea from "./DropArea";
import ErrorMessage from "../ErrorMessage";

const DropField = ({
  label,
  name,
  droppedElements,
  setDroppedElements,
  isMulti,
  errors,
}) => {
  return (
    <div>
      <div className="flex items-center">
        <label className="w-24">{label}</label>
        <DropArea
          droppedElements={droppedElements}
          setDroppedElements={setDroppedElements}
          isMulti={isMulti}
          errors={errors[name]?.items}
        />
      </div>
      <ErrorMessage message={errors[name]?.message} />
    </div>
  );
};

export default DropField;
