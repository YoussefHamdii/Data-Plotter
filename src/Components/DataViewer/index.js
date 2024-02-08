import React, { useState } from "react";
import DraggableContainer from "../DraggableContainer";

const DataViewer = () => {
  //Component States
  const [selectedDimensions, setselectedDimensions] = useState([]);
  const [selectedMeasures, setselectedMeasures] = useState([]);

  return (
    <div>
      <DraggableContainer
        dragged={selectedDimensions}
        setDragged={setselectedDimensions}
      />
      <DraggableContainer
        dragged={selectedMeasures}
        setDragged={setselectedMeasures}
      />
    </div>
  );
};

export default DataViewer;
