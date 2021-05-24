/**
 * 1. firebase 모듈을 가져온다.
 * 2. firebase config 값을 적는다.
 * 3. firebase 변수를 해당 설정값으로 초기화한다.
 * 4. firebase database 객체를 database 변수에 넣어준다.
 * 5. 다른 곳에서 사용할 수 있도록 module 을 export 해주는데 
 *    firebase database 사용 할 것이기 때문에 database 변수를 export 해준다.
 */
const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyATYWbs4vLI4oEgzcBsrPZoQN1b3J40feQ",
    authDomain: "healing-477f5.firebaseapp.com",
    projectId: "healing-477f5",
    storageBucket: "healing-477f5.appspot.com",
    messagingSenderId: "968612492028",
    appId: "1:968612492028:web:23c974cb5a2559a1279d79",
    measurementId: "G-XCHQ2VXZC9"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = database;