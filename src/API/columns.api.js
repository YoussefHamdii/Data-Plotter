import axios from "axios";

function ColumnsAPI() {
  const baseUrl = "https://plotter-task.herokuapp.com";
  const getColumns = async () => {
    try {
      //   const result = await axios.get(`${baseUrl}/columns`);
      return (
        // result ||
        {
          columns: [
            {
              name: "Product",
              function: "dimension",
            },
            {
              name: "Year",
              function: "dimension",
            },
            {
              name: "Country",
              function: "dimension",
            },
            {
              name: "Cost",
              function: "measure",
            },
            {
              name: "Revenue",
              function: "measure",
            },
            {
              name: "Units sold",
              function: "measure",
            },
          ],
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getDataValues = async (requestBody) => {
    try {
      //   const result = await axios.post(`${baseUrl}/data`, requestBody);
      return (
        // result ||
        {
          data: [
            {
              name: "Product",
              values: [
                "Diskette",
                "Memory Card",
                "HDTV Tuner",
                "Flat Panel Graphics Monitor",
                "Digital Camera",
                "Minitower Speaker",
                "Extension Cable",
                "Y Box",
              ],
            },
            {
              name: "Cost",
              values: [333.08, 7.07, 10.77, 194.76, 13.18, 143.3, 20.2, 405],
            },
          ],
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { getColumns, getDataValues };
}

export default ColumnsAPI();
