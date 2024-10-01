// 단축 평가(short-circuit evaluation)
// and , or 논리연산 특징
// and 연산 : true && 뒤 => 뒤의 값으로 결과가 결정
//         : false && 뒤 => 뒤의 값과 상관없이 무조건 false이므로 뒤의 식을 실행하지 않음







let isValid = true
if(isValid) console.log("하로")
else console.log("바이");
isValid && console.log("hello")

isValid=false
if(isValid) console.log("하로")
else console.log("바이");
isValid && console.log("hello")

let a=20
console.log(isValid || a>10)
isValid=true
console.log(isValid || a>10)
