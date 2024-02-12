import axios from "axios";
import humps from "humps";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

apiClient.interceptors.response.use((response) => ({
  ...response,
  data: humps.camelizeKeys(response.data),
}))



export default apiClient