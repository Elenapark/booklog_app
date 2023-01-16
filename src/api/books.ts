import { IBookInfo } from "./../types/books.types";
import { IKcisaProps, KcisaClient } from "./client/bookclient";
import { AxiosResponse } from "axios";

type Params = IKcisaProps;

interface BooksController {
  getList: () => Promise<AxiosResponse<IBookInfo | any>>;
}

export default class Books implements BooksController {
  apiClient: KcisaClient;
  params: Params;

  constructor(apiClient: KcisaClient, params: Params) {
    this.apiClient = apiClient;
    this.params = params;
  }

  async getList() {
    return this.apiClient
      .getBooksList(this.params)
      .then((res) => res?.data?.response?.body)
      .catch((err) => console.error(err));
  }
}
