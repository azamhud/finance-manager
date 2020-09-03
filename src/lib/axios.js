import axios from "axios";
import tokenManager from "./token-manager";
import Vue from "vue";
import Router from "../router";

// export const CancelToken = axios.CancelToken;

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

const request = axios.create({
  baseURL: API_BASE_URL
});

request.interceptors.request.use(
  config => {
    const authToken = tokenManager.retrieve();

    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        alert("Token expired, please relogin!");
        tokenManager.remove();
        Router.push("/login");
      }
    }
    return Promise.reject(error);
  }
);

/**
 * @param {import("axios").AxiosResponse} response
 */
export function getData(response) {
  return response.data;
}

export default request;
