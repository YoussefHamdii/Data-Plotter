import React from "react";
import ColumnList from "../Components/ColumnList";
import DataViewer from "../Components/DataViewer";

const MainLayout = () => {
  //Displays the main layout (Columns on left and the main content on the right) horizontal display
  return (
    <div className="flex">
      <span className="w-1/6">
        <ColumnList />
      </span>
      <span className="w-5/6">
        <DataViewer />
      </span>
    </div>
  );
};

export default MainLayout;
