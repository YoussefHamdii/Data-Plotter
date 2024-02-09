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
    <div className="border border-solid border-gray-400 h-full">
      <h2 className="border-b border-gray-400 pl-4 py-3 font-semibold text-lg">
        Columns
      </h2>
      <div className="">
        {columns.map((column, index) => (
          <div
            key={index}
            className="my-2 mx-8"
            draggable
            onDragStart={(event) => handleOnDrag(event, column)}
          >
            {column.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnList;
