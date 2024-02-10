import React, { useState } from "react";
import DropField from "../DropField";
import Chart from "../Chart";
import { COLUMN_TYPE, MEASURES } from "../../Utils/constants";
import { capitalizeFirstLetter } from "../../Utils/helperFunctions";

const DataViewer = () => {
  //Component States
  const [selectedDimension, setselectedDimension] = useState({});
  const [selectedMeasures, setselectedMeasures] = useState([]);

  //Constants
  const FIELDS = [
    {
      label: capitalizeFirstLetter(COLUMN_TYPE.dimension),
      fieldFunction: COLUMN_TYPE.dimension,
      droppedElements: selectedDimension,
      setDroppedElements: setselectedDimension,
    },
    {
      label: capitalizeFirstLetter(MEASURES),
      fieldFunction: COLUMN_TYPE.measure,
      droppedElements: selectedMeasures,
      setDroppedElements: setselectedMeasures,
      isMulti: true,
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-center">
      {FIELDS.map((field, index) => (
        <DropField
          key={index}
          label={field.label}
          fieldFunction={field.fieldFunction}
          droppedElements={field.droppedElements}
          setDroppedElements={field.setDroppedElements}
          isMulti={field.isMulti}
        />
      ))}
      <Chart
        selectedDimension={selectedDimension}
        selectedMeasures={selectedMeasures}
      />
    </div>
  );
};

export default DataViewer;
