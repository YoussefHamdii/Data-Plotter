import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import columnsAPI from "../../API/columns.api";
import { isEmpty } from "lodash";

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
  const options = {
    title: null,
    xAxis: {
      type: "category",
      title: { text: selectedDimension.name || "Dimension" },
    },
    yAxis: {
      title: { text: selectedMeasures.map((elem) => elem.name) || "Measures" },
    },
    series: [
      {
        showInLegend: false,
        data: chartValues,
      },
    ],
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
      options={options}
      containerProps={{ className: "h-[550px] w-[800px] mt-8" }}
    />
  );
};

export default Chart;
