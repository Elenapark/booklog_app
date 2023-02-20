import { IKakaoSearchProps } from "./../client/searchclient";
import { IBookInfo, IBookItemInfo } from "../../types/books.types";
import { IKcisaProps } from "../client/bookclient";
import { AxiosResponse } from "axios";
import { encrypt } from "../../utils/helper/cryptoId";

type Params = IKcisaProps | IKakaoSearchProps;

interface BooksController {
  getList: () => Promise<AxiosResponse<IBookInfo | any>>;
}

export default class Books implements BooksController {
  apiClient: InstanceType<any>;
  params?: Params;

  constructor(apiClient: InstanceType<any>, params?: Params) {
    this.apiClient = apiClient;
    this.params = params;
  }

  async getList() {
    return this.apiClient
      .getBooksList(this.params)
      .then((res: AxiosResponse<any>) =>
        res?.data?.response?.body.items.item.map((el: IBookItemInfo) => ({
          ...el,
          id: encrypt(el.title),
        }))
      )
      .catch(console.error);
  }
}
