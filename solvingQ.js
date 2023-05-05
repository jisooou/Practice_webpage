/*칼로리 계산기*/
let espresso = 10;
let milk = 170;
let chocolateSyrup = 50;
let whippedCream = 60;
// 메뉴별 칼로리 테스트
console.log(espresso); // 에스프레소 칼로리
console.log(espresso + milk); // 라떼 칼로리
console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리


/*애국가*/
function printChorus() {
  console.log('무궁화 삼천리 화려 강산');
  console.log('대한 사람 대한으로 길이 보전하세');
}
// 애국가 가사
console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
printChorus();

console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
printChorus();

console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세');
printChorus();

console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');
printChorus();


/*파라미터(parameter) 활용 예시*/
function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
};

welcome('코딩');


/*숫자의 거듭제곱 출력*/
function printSquare(x) {
  console.log(x * x);
}

printSquare(2);
printSquare(5);
printSquare(6);


/*내 노트북 용량은?*/
function teraToGiga(volume) {
  console.log(volume + 'TB는');
  console.log(volume * 1024 + 'GB 입니다.');
}
function teraToMega(volume) {
  console.log(volume + 'TB는');
  console.log(volume * 1024 * 1024 + 'MB 입니다.');
}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);


/*자기소개*/
function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + '입니다.');
  console.log('생년월일은 ' + birth + '이고,');
  console.log('국적은 ' + nationality + '입니다.');
  console.log('직업은 ' + job + '입니다.');
  console.log('잘 부탁드립니다!');
};

introduce('강아지', '20.05.06', '한국', '프로그래머');
