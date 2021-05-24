const proxy = require('http-proxy-middleware');

/**
 * 1) React에서 백엔드 서버로 API 요청 시 호출 할 때 발생 할 수 있는 CORS 관련 오류를 방지하기 위하여 Proxy를 설정하여 준다.
 * 2) server Url을 보기좋게 한다.
 */
module.exports = function (app) {
    app.use(
        proxy('/api',{
            target :'http://localhost:3002/'
        })
    );
};