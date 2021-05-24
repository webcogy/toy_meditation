# 토이프로젝트 - 명상&힐링

- 사용기술
  - React
  - Nodejs
  - firebase (DB)

## [1] React & Nodejs 연동

### 1. React Project 파일 만들기

```
npx create-react-app [원하는 파일명]
ex) npx create-react-app alone
```

### 2. Node.js express 설치하기

```
npm install express --save

// 추가 라이브러리 설치

1) post 통신시 데이터를 읽어드리는 라이브러리
npm install body-parser --save

2) ejs란?
템플릿이 있고 템플릿에 보여주고 싶은 데이터가 있을때
템플릿 엔진이 이 둘을 합쳐 결과 페이지를 생성
참고 : https://velog.io/@mactto3487/%EC%8A%A4%ED%84%B0%EB%94%94-EJS
npm install ejs --save

3) 세션 기능을 활성화 시키는 라이브러리다. 웹개발 로그인 부분에서 필수적이라고 할 수 있다.
npm install express-session

4) serve-static은 폴더 파일과 개발한 소스들이 유연하게 연동되게 해준다.
npm install serve-static
```

### 3. Proxy 설정하기 (CORS 에러때문에 수동설정으로 변경하기 위함임)

server 라는 폴더 아래 routes 폴더를 만들고 index.js 와 server.js를 해당하는 폴더 아래에 넣는다. /setProxy.js 에서 proxy를 설정한다.

```
npm install http-proxy-middleware --save
```

이미 생성되어있는 src 파일 밑에 setProxy.js라는 파일을 새로 만들어준다.

### 4. terminal에서 실행하기

```
// 개발용 nodejs 자동재시작 ('supervisor'라이브러리 설치 후 package.json에 설정함)
yarn dev

// 일반적인 서버 시작
npm start ./server/server.js
```

### -> localhost:3002/api 에서 확인 가능

> 참고 링크 :
>
> https://velog.io/@ksy990628/ReactNodejs-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-%EC%88%98%EC%A0%95%EC%A4%91
>
> https://singa-korean.tistory.com/22?category=829618
>
> > exporess 사용법보기 (공식) :
> > https://expressjs.com/ko/guide/routing.html

## [2] firebase

```
npm install firebase --save
npm install -g firebase-tools

// 작업 구성
1) /server/routes/firebase/config.js 에 firebase 설정정보 입력.
2) /server/server.js를 실행시키면, /server/routes/index.js의 express와 firebase를 읽는다.
3) server Url은 /src/setProxy.js 에서 담당한다.

// 계정연동
firebase login

// 개발방법. 정적개발진행하기
firebase init functions

// 로컬서버로 정상 동작 확인하기
firebase serve

참고 :
https://alvine.tistory.com/243
```

> 참고링크 :
>
> https://firebase.google.com/docs/web/setup?authuser=0#with-npm_1
>
> https://velog.io/@junsugi/conquer-nodeJs-6#firebase-%EB%AA%A8%EB%93%88-%EC%84%A4%EC%B9%98
