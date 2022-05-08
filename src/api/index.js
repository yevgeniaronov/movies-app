import axios from "axios";

const axiosParams = {
  baseURL: "https://api.themoviedb.org/3/",
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use((request) => {
  request.params = {
    ...request.params,
    api_key: "0f5899668c12f02f9197b3ccce04d3ef",
  };
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.patch(url, body, config),
    delete: (url, config = {}) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
