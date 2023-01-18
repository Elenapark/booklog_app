# 📚 BookLog

## Goal

- 적극적인 독서 활동을 위한 추천도서 리스트업 및 독서활동 기록 앱

## Features

- 로그인 기능 (Firebase Auth)

- 추천도서 리스트 보여주기
- 추천도서 상세페이지 보여주기

  - 문화체육관광부 추천도서 API: https://www.culture.go.kr/data/openapi/openapiView.do?id=170&category=F&gubun=A
  - 문화체육관광부 대학신입생 추천도서 API: https://www.culture.go.kr/data/openapi/openapiView.do?id=366&category=F&gubun=A
  - 기타 등등

- 위시리스트 (좋아하는 / 나중에 읽을 책) 추가하기
- 저장된 위시리스트 보여주기
- 위시리스트 삭제하기

- 내 북로그 작성하기
  - 도서 검색 API : https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book
  - 이미지 업로드해서 직접 도서 등록하기?
- 내 북로그 리스트 보여주기
- 북로그 상세페이지 보여주기
- 북로그 수정 / 삭제하기

## Routing

<!-- public  -->

- path: /

  - 배너
  - 탭으로 이동
    - 추천도서 리스트
    - 내가 등록한 위시리스트
    - 내가 기록한 북로그 리스트

- path: /books/recommended
- path: /books/recommended/:bookTitle

  - 추천도서 리스트
  - 특정 추천도서 상세 페이지 : 구매가능 링크 이동?

<!-- private: login한 유저 only -->

- path: /books/wishlist

  - 위시리스트 (+ 삭제 / 좋아요 해제 기능)

- path: /booklog
- path: /booklog/:logId
- path: /booklog/new
  - 내가 기록한 북로그 리스트 (+수정,삭제 기능)
  - 특정 북로그 상세 페이지
  - 새로운 북로그 작성 페이지
