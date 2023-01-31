import { IKakaoSearchProps, SearchBookClient } from "./../client/searchclient";
import { ISearchBookItemInfo, ISearchBooks } from "../../types/books.types";
import { AxiosResponse } from "axios";
import { encrypt } from "../../utils/helper/cryptoId";

interface BookSearchController {
  searchBooks: (
    params: IKakaoSearchProps
  ) => Promise<AxiosResponse<ISearchBooks>>;
}

export default class BookSearch implements BookSearchController {
  constructor(private apiClient: SearchBookClient) {
    this.apiClient = apiClient;
  }

  async searchBooks(params: IKakaoSearchProps) {
    return this.apiClient
      .search(params)
      .then((res: AxiosResponse<any>) =>
        res?.data.documents.map((el: ISearchBookItemInfo) => ({
          ...el,
          id: encrypt(el.title),
        }))
      )
      .catch(console.error);
  }
}
