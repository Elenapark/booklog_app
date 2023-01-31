import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ISearchBooks } from "../../types";
import { BookClient } from "./bookclient";

export interface IKakaoSearchProps {
  params: {
    query: string;
    sort?: "accuracy" | "latest";
    page?: number; // page no.
    size?: number; // item size of one page
    target?: "title" | "isbn" | "publisher" | "person";
  };
}

export interface SearchBookClient {
  search: (params: IKakaoSearchProps) => Promise<AxiosResponse<ISearchBooks>>;
}

export class KaKaoSearchClient implements SearchBookClient {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://dapi.kakao.com/v3/search",
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_BOOK_SEARCH_API_KEY} `,
      },
      timeout: 10000,
    });
  }

  async search(params: IKakaoSearchProps) {
    return this.httpClient.get("/book", params);
  }
}
