import React, { useEffect, useState } from "react";
import DropField from "../DropField";
import Chart from "../Chart";
import { isEmpty } from "lodash";
import { COLUMN_TYPE, MEASURES } from "../../Utils/constants";
import { capitalizeFirstLetter } from "../../Utils/helperFunctions";

const DataViewer = () => {
  //Component States
  const [selectedDimension, setselectedDimension] = useState({});
  const [selectedMeasures, setselectedMeasures] = useState([]);
  const [errors, setErrors] = useState({});

  //Use effects
  useEffect(() => {
    validate();
  }, [selectedDimension, selectedMeasures]);

  //Handlers
  const validate = () => {
    setErrors({});
    if (
      selectedDimension.function &&
      selectedDimension.function !== COLUMN_TYPE.dimension
    )
      setErrors((prevErrors) => ({
        ...prevErrors,
        dimension: { message: "Cannot add a measure in dimension field" },
      }));

    const measuresError = selectedMeasures.filter(
      (elem) => elem.function !== COLUMN_TYPE.measure
    );
    if (!isEmpty(selectedMeasures) && !isEmpty(measuresError))
      setErrors((prevErrors) => ({
        ...prevErrors,
        measures: {
          message: "Cannot add a dimension in measures field",
          items: measuresError,
        },
      }));
  };

  //Constants
  const FIELDS = [
    {
      label: capitalizeFirstLetter(COLUMN_TYPE.dimension),
      name: COLUMN_TYPE.dimension,
      droppedElements: selectedDimension,
      setDroppedElements: setselectedDimension,
      errors: errors,
    },
    {
      label: capitalizeFirstLetter(MEASURES),
      name: MEASURES,
      droppedElements: selectedMeasures,
      setDroppedElements: setselectedMeasures,
      isMulti: true,
      errors: errors,
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-center">
      {FIELDS.map((field, index) => (
        <DropField
          key={index}
          label={field.label}
          name={field.name}
          droppedElements={field.droppedElements}
          setDroppedElements={field.setDroppedElements}
          isMulti={field.isMulti}
          errors={field.errors}
        />
      ))}
      <Chart
        selectedDimension={selectedDimension}
        selectedMeasures={selectedMeasures}
        errors={errors}
      />
    </div>
  );
};

export default DataViewer;
