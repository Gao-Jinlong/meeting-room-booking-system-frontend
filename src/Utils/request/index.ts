import axios from "axios";
import { UserJwtDto } from "../../api/interface";

export interface ResponseWrapper<T> {
  code: number;
  data: T;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 60 * 1000,
});

axiosInstance.interceptors.request.use(function (config) {
  const userJwt: UserJwtDto = JSON.parse(localStorage.getItem("user") ?? "");

  if (userJwt) {
    config.headers.Authorization = `Bearer ${userJwt.accessToken}`;
  }

  return config;
});

export default axiosInstance;
