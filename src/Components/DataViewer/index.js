import React, { useState } from "react";
import DropArea from "../DropField";
import Chart from "../Chart";

const DataViewer = () => {
  //Component States
  const [selectedDimension, setselectedDimension] = useState({});
  const [selectedMeasures, setselectedMeasures] = useState([]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <DropArea
        label="Dimension"
        droppedElements={selectedDimension}
        setDroppedElements={setselectedDimension}
      />
      <DropArea
        label="Measures"
        droppedElements={selectedMeasures}
        setDroppedElements={setselectedMeasures}
        isMulti
      />
      <Chart
        selectedDimension={selectedDimension}
        selectedMeasures={selectedMeasures}
      />
    </div>
  );
};

export default DataViewer;
