# 📚 BookLog

## 목표

- 적극적인 독서 활동을 위한 추천도서 리스트업 및 독서활동 기록 앱

## 배포 주소

- https://resplendent-bonbon-fede5b.netlify.app

## 작업 기간

- 2023.01 ~ 2023.02

## 사용 기술 스택

- React
- TypeScript
- Tanstack-query
- Draft.js
- TailwindCss
- Firebase (Auth/Realtime-Database)

## 주요 기능

- Firebase를 이용하여 로그인(auth), 데이터베이스(real time database) 적용

- 추천도서 리스트, 상세 페이지 (위시리스트 추가)

  - 의도에 맞는 도서 목록을 가져오기 위해 puppeteer를 이용한 크롤링 데이터 사용

    <img width="500" alt="main" src="https://user-images.githubusercontent.com/60565155/216973111-3afc1225-dc03-4414-b2d0-35c722c53b9b.png">
    <img width="500" alt="bookDetail" src="https://user-images.githubusercontent.com/60565155/216973971-32dce6de-e8dc-4694-a018-b2ec49729a22.png">

- 위시리스트 (삭제 기능 추가)

  <img width="500" alt="wishlist" src="https://user-images.githubusercontent.com/60565155/216975412-9844df8a-9de1-40e4-bcaf-6d550ac6cd8b.png">

- 북로그 작성 페이지

  - 도서 검색 API 이용 : https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book

    <img width="500" alt="search-book" src="https://user-images.githubusercontent.com/60565155/216975874-4e13af3f-eb0e-4f20-9740-1547cdbb0c06.png">

  - Draft.js 라이브러리를 이용한 텍스트 에디터 구현

    <img width="500" alt="add-booklog" src="https://user-images.githubusercontent.com/60565155/216976452-45fffb68-086d-486a-81f4-82b3d5aea55a.png">
    <img width="500" alt="add-booklog-2" src="https://user-images.githubusercontent.com/60565155/216976488-8d381ed5-987d-4b83-98e9-7b705ef21a03.png">

- 북로그 리스트, 상세페이지 (북로그 수정, 삭제 기능)

    <img width="500" alt="booklog-list" src="https://user-images.githubusercontent.com/60565155/216976826-2f9d87cb-47d8-4859-aca1-e56d4c5c0543.png">
    <img width="500" alt="edit-booklog" src="https://user-images.githubusercontent.com/60565155/216977023-2b626a00-59ed-401b-aedf-d8dfdcd952d0.png">
