import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://api.kcisa.kr/openapi/service/rest",
  timeout: 5000,
});
