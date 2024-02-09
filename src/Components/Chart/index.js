import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import columnsAPI from "../../API/columns.api";
import { isEmpty } from "lodash";
import { capitalizeFirstLetter } from "../../Utils/helperFunctions";
import { COLUMN_TYPE } from "../../Utils/constants";
import { NoDataToDisplay } from "react-highcharts-no-data-to-display";

NoDataToDisplay(Highcharts);

const Chart = ({ selectedDimension, selectedMeasures, errors }) => {
  //Components states
  const [chartValues, setChartValues] = useState([]);

  //Use effects
  useEffect(() => {
    if (
      !isEmpty(selectedMeasures) &&
      !isEmpty(selectedDimension) &&
      isEmpty(errors)
    )
      getDataValues();
    else setChartValues([]);
  }, [selectedDimension, selectedMeasures, errors]);

  //Constants
  const CHART_OPTIONS = {
    title: null,
    chart: {
      backgroundColor: "#F2F6F4",
      type: "line",
    },
    xAxis: {
      type: "category",
      title: {
        text:
          selectedDimension.name ||
          capitalizeFirstLetter(COLUMN_TYPE.dimension),
      },
    },
    yAxis: {
      title: {
        text:
          selectedMeasures.map((elem) => elem.name) ||
          capitalizeFirstLetter(COLUMN_TYPE.measure),
      },
    },
    series: [
      {
        showInLegend: false,
        data: isEmpty(errors) ? chartValues : [],
      },
    ],
    noData: {
      style: { fontWeight: "bold", fontSize: "15px", color: "#3d4871" },
    },
    tooltip: { pointFormat: "value: <b>{point.y}</b>" },
    credits: { enabled: false },
  };

  //Handlers
  const getDataValues = async () => {
    const payload = {
      measures: selectedMeasures.map((elem) => elem.name),
      dimension: selectedDimension.name,
    };
    const result = await columnsAPI.getDataValues(payload);
    if (!result) return;
    let dataoptions = [];
    result.data[0]?.values.forEach((element, index) => {
      dataoptions.push([element, result.data[1]?.values[index]]);
    });
    setChartValues(dataoptions);
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={CHART_OPTIONS}
      containerProps={{ className: "h-[550px] w-[800px] mt-2" }}
    />
  );
};

export default Chart;
