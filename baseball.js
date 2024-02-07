// 1. 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// 2. 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// -> 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
// -> 숫자의 값과 위치가 모두 일치하면 S
// -> 숫자의 값은 일치하지만 위치가 틀렸으면 B
// 3. 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

// console.log(Math.floor(Math.random() * 10));

//random number
// let b = Math.floor(Math.random() * 10);

let randomNum = [];
while (randomNum.length < 3) {
  //   randomNum.push(Math.floor(Math.random() * 10));
  let num = Math.floor(Math.random() * 10);
  if (!randomNum.includes(num)) {
    randomNum.push(num);
  }
}
let str3 = randomNum.join("");
// console.log("randomNum : " + str3);
// 2. 한자리 숫자에 대해 볼, 스크라이크 판단 하는 부분 구현하기
let userAnswer = "321"; // 임시
let ball = 0;
let strike = 0;
let count = 0;
console.log(`userAnswer = ${userAnswer}, random = ${str3}`);
for (let i = 0; i < 3; i++) {
  if (str3[i] === userAnswer[i]) {
    strike++;
  } else if (str3.includes(userAnswer[i])) {
    ball++;
  }
}
// 3. 볼, 스트라이크를 표현하는 부분 구현하기
console.log(`${ball}B${strike}S`);



// 4. 게임 종료하는 부분 구현하기
