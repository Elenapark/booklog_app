// recommended books

export interface IBooks {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: IBookInfo;
}

export interface IBookInfo {
  items: {
    item: IBookItemInfo[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: string;
}

export interface IBookItemInfo {
  id: string;
  title: string;
  alternativeTitle: string;
  creator: string;
  regDate: string;
  collectionDb: string;
  subjectCategory: string;
  subjectKeyword: string;
  extent: string;
  description: string;
  spatialCoverage: string;
  temporal: string;
  person: string;
  language: string;
  sourceTitle: string;
  charge: string;
  referenceIdentifier: string;
  rights: string;
  copyrightOthers: string;
  url: string;
  subDescription: string;
  issuedDate: string;
  contributor: string;
}

// search books

export interface ISearchBooks {
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
  documents: ISearchBookItemInfo[];
}

export interface ISearchBookItemInfo {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string; // 10,13자리 모두 제공될 경우 공백('')으로 구분
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string; // 도서 상세 페이지 url
}
