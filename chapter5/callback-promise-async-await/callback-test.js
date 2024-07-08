const DB = [];

// 회원가입 함수
function register(user, callback) {
    saveDB(user, function(savedUser) {
        sendEmail(savedUser, function(userWithEmailSent) {
            const result = getResult(userWithEmailSent);
            callback(result);
        });
    });
}

// DB에 저장 후 콜백 실행
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    callback(user); // 저장 후 바로 콜백 실행
}

// email 발송 로그만 남기는 코드 실행 후 콜백 실행
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    callback(user); // 이메일 발송 후 바로 콜백 실행
}

// 결과를 반환하는 함수
function getResult(user) {
    return `success register ${user.name}`;
}

// register 함수 호출
register({ email: "and@ac.com", password: "1234", name: "andy" }, function(result) {
    console.log(result); // 회원가입 결과 출력
});