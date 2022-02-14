import axios from "axios";

const service = axios.create({
  baseURL: "https://course-api.com/react-store-products",
  timeout: 100000,
});

service.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { service };
