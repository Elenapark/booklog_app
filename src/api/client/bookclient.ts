import { IBooks } from "./../../types/books.types";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface IKcisaProps {
  params: {
    numOfRows: number;
    pageNo: number;
  };
}

interface BookClient {
  getBooksList: (params: IKcisaProps) => Promise<AxiosResponse<IBooks>>;
}

export class KcisaClient implements BookClient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://api.kcisa.kr/openapi/service/rest",
      params: { serviceKey: process.env.REACT_APP_KCISA_RECOMMENDED_BOOKS },
      timeout: 10000,
    });
  }

  async getBooksList(params: IKcisaProps) {
    return this.httpClient.get(`/meta4/getKCPG0506`, params);
  }
}
