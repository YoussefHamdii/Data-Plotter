import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import columnsAPI from "../../API/columns.api";
import { isEmpty } from "lodash";
import { capitalizeFirstLetter } from "../../Utils/helperFunctions";
import { COLUMN_TYPE } from "../../Utils/constants";
import { NoDataToDisplay } from "react-highcharts-no-data-to-display";

NoDataToDisplay(Highcharts);

const Chart = ({ selectedDimension, selectedMeasures }) => {
  //Components states
  const [chartValues, setChartValues] = useState([]);

  //Use effects
  useEffect(() => {
    if (!isEmpty(selectedMeasures) && !isEmpty(selectedDimension))
      getDataValues();
    else setChartValues([]);
  }, [selectedDimension, selectedMeasures]);

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
    series: chartValues.map((measure) => ({
      name: measure.name,
      data: measure.values,
    })),
    noData: {
      style: { fontWeight: "bold", fontSize: "15px", color: "#7F7F7F" },
    },
    tooltip: { pointFormat: "{series.name}: <b>{point.y}</b>" },
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
    mapDataValues(result.data);
  };

  const mapDataValues = (result) => {
    let chartData = [];

    const pushMeasureToChartData = (element, index) => {
      measureData.push([element, result[i]?.values[index]]); //the i and measureData vars can be used here because they are hoisted
    };

    //Using for loop to control the starting index of iterations (assuming first index (0) is always the dimension so we start from 1)
    for (var i = 1; i < result.length; i++) {
      var measureData = [];
      result[0]?.values.forEach(pushMeasureToChartData);
      chartData.push({ name: result[i]?.name, values: measureData });
    }
    setChartValues(chartData);
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
