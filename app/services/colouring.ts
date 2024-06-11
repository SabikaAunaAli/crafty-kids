import { GetData } from "./api";

export const GetAllBlog = (params: {
  //   id: string | number;
  pageNumber: number;
  pageSize: number;
  query?: string;
  type?: any;
  [x: string]: any;
}) => {
  return GetData("/api/Blog/GetAll", params);
};

export const GetBlog = (params: { id: number }) => {
  return GetData("/api/Blog/Get", params);
};

export const GetAllAge = (params: {
  //   id: string | number;
  pageNumber: number;
  pageSize: number;
  query?: string;
  [x: string]: any;
}) => {
  return GetData("/api/Age/GetAll", params);
};
