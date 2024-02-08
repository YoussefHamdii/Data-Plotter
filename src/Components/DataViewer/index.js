import React, { useState } from "react";
import DropArea from "../DropField";

const DataViewer = () => {
  //Component States
  const [selectedDimensions, setselectedDimensions] = useState([]);
  const [selectedMeasures, setselectedMeasures] = useState([]);

  return (
    <div className="flex flex-col gap-2 mt-10">
      <DropArea
        label="Dimension"
        droppedElements={selectedDimensions}
        setDroppedElements={setselectedDimensions}
      />
      <DropArea
        label="Measures"
        droppedElements={selectedMeasures}
        setDroppedElements={setselectedMeasures}
        isMulti
      />
    </div>
  );
};

export default DataViewer;
