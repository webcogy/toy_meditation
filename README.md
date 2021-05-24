# React & Nodejs 연동

## 1. React Project 파일 만들기

```
npx create-react-app [원하는 파일명]
ex) npx create-react-app alone
```

## 2. Node.js express 설치하기

```
npm install express --save
```

## 3. Proxy 설정하기

server 라는 폴더 아래 routes 폴더를 만들고 index.js 와 server.js를 해당하는 폴더 아래에 넣는다.

```
npm install http-proxy-middleware --save
```

이미 생성되어있는 src 파일 밑에 setProxy.js라는 파일을 새로 만들어준다.

## 4. terminal에서 실행하기

```
node ./server/server.js
```

-> localhost:3002/api 에서 확인 가능

참고 링크

https://velog.io/@ksy990628/ReactNodejs-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-%EC%88%98%EC%A0%95%EC%A4%91

exporess 사용법보기 (공식)

https://expressjs.com/ko/guide/routing.html
