import React from "react";

const DraggableContainer = ({ dragged, setDragged }) => {
  const handleOnDrop = (event) => {
    const selectedColumn = JSON.parse(event.dataTransfer.getData("column"));
    setDragged((prev) => [...prev, selectedColumn]);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className="h-72 border border-solid border-green-600"
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      {dragged.map((elem, index) => (
        <div key={index}>{elem.name}</div>
      ))}
    </div>
  );
};

export default DraggableContainer;
