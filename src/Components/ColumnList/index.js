import React, { useEffect, useState } from "react";
import ColumnsAPI from "../../API/columns.api";
import { isEmpty } from "lodash";

const ColumnList = () => {
  //Component States
  const [columns, setColumns] = useState([]);

  //Use effects
  useEffect(() => {
    getColumns();
  }, []);

  //Handlers
  const getColumns = async () => {
    const result = await ColumnsAPI.getColumns();
    if (result && !isEmpty(result?.columns)) setColumns(result?.columns);
  };
  const handleOnDrag = (event, selectedColumn) => {
    event.dataTransfer.setData("column", JSON.stringify(selectedColumn));
  };

  return (
    <>
      <div className="border border-solid border-slate-900">
        {columns.map((column, index) => (
          <div
            key={index}
            className="border border-solid border-red-700"
            draggable
            onDragStart={(event) => handleOnDrag(event, column)}
          >
            {column.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default ColumnList;
