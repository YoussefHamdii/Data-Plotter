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

  return { getColumns };
}

export default ColumnsAPI();
