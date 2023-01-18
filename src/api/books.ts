import { IBookInfo, IBookItemInfo } from "./../types/books.types";
import { IKcisaProps, KcisaClient } from "./client/bookclient";
import { AxiosResponse } from "axios";
import { encrypt } from "../utils/helper/cryptoId";

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
      .then((res) =>
        res?.data?.response?.body.items.item.map((el: IBookItemInfo) => ({
          ...el,
          id: encrypt(el.title),
        }))
      )
      .catch((err) => console.error(err));
  }
}
