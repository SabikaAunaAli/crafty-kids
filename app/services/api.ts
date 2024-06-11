"use client";
import axios from "axios";

axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjI2NjA1NTAzMDYsImlkIjoxfQ.YWPvHBn1dkxgAnaH6cXbpyBvISMQfQUwUFZKo_yHfEE`;
axios.defaults.baseURL = process.env.API_KEY;

axios.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor:", config);

    return config;
  },
  (error) => {
    console.error("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export const GetData = async (
  endpoint: string,
  params: { [x: string]: any }
) => {
  return ResponseHandler(await axios.get(endpoint, { params }));
};

export const PostData = async (
  endpoint: string,
  data: { [x: string]: any }
) => {
  return ResponseHandler(await axios.post(endpoint, data));
};

export const DeleteData = async (endpoint: string, id: number | string) => {
  return ResponseHandler(await axios.delete(`${endpoint}/${id}`));
};

export const ResponseHandler = (response: any) => {
  return {
    data: response?.data?.data,
    message: response?.data?.message,
    error:
      response?.data?.errors ||
      response?.data?.message ||
      "Something went wrong, please try again",
    statusCode: response?.data?.statusCode,
  };
};
