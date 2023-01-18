import CryptoJS from "crypto-js";

export const encrypt = (data: string) => {
  const word = CryptoJS.enc.Utf8.parse(data);
  return CryptoJS.enc.Base64.stringify(word);
};
export const decrypt = (encrytedData: string) => {
  const word = CryptoJS.enc.Base64.parse(encrytedData);
  return word.toString(CryptoJS.enc.Utf8);
};
