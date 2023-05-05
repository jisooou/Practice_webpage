//let은 1번 선언 후에 다른 값으로 바꿀 수 있다.(변할 수 있는 값)
//const는 절대로 바뀌지 않는 상수. 수정하면 오류가 난다.(변하지 않는 값)

/*문자형 String */
const name = "Mike"; 
const age = 30; 

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4)

/*숫자형 Number*/
const age = 30;
const PI = 3.14;

console.log(1 + 2);
console.log(10 - 3);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 % 4);

/*Boolean*/
const a = true; //참
const b = false; //거짓

//null & undefinded 
//null: 존재하지 않는 값. undefinded: 값이 할당되지 않았다. 

//typeof 연산자 - "number" "string" "boolean" "object" "undefinded"

/*함수 선언*/
function greetings() {
    console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
};
//함수 호출
greetings();

/*Parameter(매개변수)*/
function 함수이름(parameter){ 
};

/*여러 개의 파라미터*/
function printSum(num1, num2) {
  console.log(num1 + num2);
};

printSum(10,5);
printSum(56, 7890);

/*return문(1)*/
function getTwo() {
  return 2;
}

console.log(getTwo());

/*return문(2)*/
function getTwice(number) {
  return number * 2;
}

console.log(getTwice(5));

/*return문(3)*/
function geTtwice(number) {
  return number *2;
}

let x = geTtwice(5);
let y = geTtwice(2);

console.log(x + y);
