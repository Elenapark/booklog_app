export interface IBooks {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: {
      item: IBookInfo[];
    };
    numOfRows: number;
    pageNo: number;
    totalCount: string;
  };
}

interface IBookInfo {
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
