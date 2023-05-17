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

/*문자열*/
console.log("He said \"I'm Iron man\"."); //따옴표가 포함된 문장 출력하기 

/*숫자형 Number*/
const age = 30;
const PI = 3.14;

console.log(1 + 8); //덧셈 
console.log(6 -7); //뺄셈 
console.log(2 * 2); //곱셈
console.log(5 / 2); //나눗셈 
console.log(7 % 3); //나머지 
console.log(2 ** 3); //거듭제곱 

// 거듭제곱 **은 곱셈 *보다 연산 우선순위가 높다. 
// ex) console.log((3 + 27) * 12 ** (5 % 3)); 
// 4320

/*Boolean*/
const a = true; //참
const b = false; //거짓

console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 3);
console.log(3 === 3); // 서로 일치한다
console.log(3 !== 3); // 불일치한다

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

//null & undefinded 
//null: 존재하지 않는 값. undefinded: 값이 할당되지 않았다. 

/*typeof 연산자*/
//typeof 연산자 - "number" "string" "boolean" "object" "undefinded"
console.log(typeof 101); //number
console.log(typeof 'Name'); //string
console.log(typeof true); //boolean

let name = "Lee";
function sayHello() {
  console.lof('Hello');
}
console.log(typeof name); //string
console.log(typeof sayHello); //funcion

console.log(typeof 'Hello' + 'Name'); //stringName
console.log(typeof 8 - 3); //NaN 
console.log(typeof ('Hello' + 'Name')); //string
console.log(typeof (8 - 3)); //number 

/*형 변환(Type Conversion)*/
//숫자 -> 문자 
let x = 123;
console.log(x); //123
console.log(String(x)); //123
console.log(typeof x); //number
console.log(typeof String(x)); //string

console.log('');

//불린 -> 문자 
let x = true; 
console.log(x); //true
console.log(String(x)); //true 
console.log(typeof x); //boolean
console.log(typeof String(x)); //string 

//불린 -> 숫자
let y = false;
console.log(y); //false
console.log(Number(y)); //0
console.log(typeof y); //boolean
console.log(typeof Number(y)); //number

//숫자 -> 불린 
let k = 123; 
console.log(k); //123 
console.log(Boolean(k)); //true
console.log(typeof k); //number
console.log(typeof Boolean(k)); //boolean

// '', 0, NaN : false가 나오는 값들, falsy 

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
