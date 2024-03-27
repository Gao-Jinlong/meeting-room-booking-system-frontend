import axios, { AxiosRequestConfig } from "axios";
import { UserJwtDto } from "../../api/interface";
import { message } from "antd";

export interface ResponseWrapper<T> {
  code: number;
  data: T;
  message: string;
}

interface PendingTask {
  config: AxiosRequestConfig;
  resolve: Function;
}

let refreshing = false;
const queue: PendingTask[] = [];

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 60 * 1000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    let { data, config } = error.response;

    if (refreshing) {
      return new Promise((resolve) => {
        queue.push({
          config,
          resolve,
        });
      });
    }

    if (data.code === 401 && !config.url.includes("/user/refresh")) {
      refreshing = true;

      const res = await refreshToken();

      refreshing = false;

      if (res.status === 200) {
        queue.forEach(({ config, resolve }) => {
          resolve(axiosInstance(config));
        });

        return axiosInstance(config);
      } else {
        message.error(res.data);

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      }
    } else {
      return error.response;
    }
  }
);

async function refreshToken() {
  const user = JSON.parse(localStorage.getItem("user") ?? "");
  const res = await axiosInstance.get("/user/refresh", {
    params: {
      refreshToken: user.refreshToken,
    },
  });

  localStorage.setItem("user", JSON.stringify({ ...user, ...res.data }));

  return res;
}

axiosInstance.interceptors.request.use(function (config) {
  const userJwt: UserJwtDto = JSON.parse(localStorage.getItem("user") ?? "");

  if (userJwt) {
    config.headers.Authorization = `Bearer ${userJwt.accessToken}`;
  }

  return config;
});

export default axiosInstance;
