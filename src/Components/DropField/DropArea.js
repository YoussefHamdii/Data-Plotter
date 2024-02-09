import React from "react";

const DropArea = ({ droppedElements, setDroppedElements, isMulti, errors }) => {
  //Handlers
  const handleOnDrop = (event) => {
    const selectedColumn = JSON.parse(event.dataTransfer.getData("column"));
    //When in single value mode
    if (!isMulti) {
      setDroppedElements(selectedColumn);
      return;
    }
    //To inforce uniqueness of the dragged items
    if (!droppedElements.find((elem) => elem.name === selectedColumn.name))
      setDroppedElements((prev) => [...prev, selectedColumn]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const clearDroppedElements = () => {
    setDroppedElements(isMulti ? [] : {});
  };

  return (
    <div className="flex">
      <div
        className="flex gap-2 px-2 items-center w-96 h-8 border border-solid border-gray-400"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {isMulti
          ? droppedElements.map((elem, index) => (
              <div
                key={index}
                className={`border-l-2 ${
                  errors?.find((errorElem) => errorElem.name === elem.name)
                    ? "border-red-600"
                    : "border-x-gray-500"
                } px-1 bg-neutral-200`}
              >
                {elem.name}
              </div>
            ))
          : droppedElements.name}
      </div>
      <button
        className="border border-solid border-gray-400 h-8 px-2"
        onClick={clearDroppedElements}
      >
        Clear
      </button>
    </div>
  );
};

export default DropArea;
