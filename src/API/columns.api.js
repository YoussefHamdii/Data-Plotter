import axios from "axios";

function ColumnsAPI() {
  const baseUrl = "https://plotter-task-8019e13a60ac.herokuapp.com";
  const getColumns = async () => {
    try {
      const result = await axios.get(`${baseUrl}/columns`);
      return (result && result.data) || {};
    } catch (error) {
      console.log(error);
    }
  };

  const getDataValues = async (requestBody) => {
    try {
      const result = await axios.post(`${baseUrl}/data`, requestBody);
      return (result && result.data) || {};
    } catch (error) {
      console.log(error);
    }
  };

  return { getColumns, getDataValues };
}

export default ColumnsAPI();
