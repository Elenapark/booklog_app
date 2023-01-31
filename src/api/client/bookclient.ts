import { IBooks } from "./../../types/books.types";
import axios, { AxiosInstance, AxiosResponse } from "axios";

const RECOMMENDED_FOR_UNIVS = "/meta13/getKPEF0103";

export interface IKcisaProps {
  params: {
    numOfRows: number;
    pageNo: number;
  };
}

export interface BookClient {
  getBooksList: (params: IKcisaProps) => Promise<AxiosResponse<IBooks>>;
}

export class KcisaClient implements BookClient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://api.kcisa.kr/openapi/service/rest",
      params: {
        serviceKey:
          process.env.REACT_APP_KCISA_RECOMMENDED_BOOKS_FOR_UNIV_STUDENTS,
      },
      timeout: 10000,
    });
  }

  async getBooksList(params: IKcisaProps) {
    return this.httpClient.get(RECOMMENDED_FOR_UNIVS, params);
  }
}
