let gameStartBtn = document.getElementById("gameStartBtn");
let gameContainer = document.getElementById("gameContainer");
let answerBtn = document.getElementById("answerBtn");
let userAns = document.getElementById("userAnswer");
let gameArea = document.getElementById("gameArea");
let userHistory_content = document.getElementById("userHistory_content");
let answerArea = document.getElementById("answerArea");
let resetBtn = document.getElementById("resetBtn");
let userAnswer: string = "";
let randomNum: number[] = [];
let ball: number;
let strike: number;
let count: number = 0;

if (answerBtn instanceof HTMLInputElement) {
  answerBtn?.addEventListener("click", () => {
    // 클릭할 때 마다 초기화
    ball = 0;
    strike = 0;
    if (userAns instanceof HTMLInputElement) {
      userAnswer = userAns.value;
    }
    let randomStr = rNumber();
    cNum(randomStr);
    // console.log(`${ball}B${strike}S`);
    count++;
    gemeover(strike);
    // text 뜨게
    message();
  });
}

let gemeover = (strike: number): void => {
  // console.log(strike);
  if (strike === 3) {
    gameArea!.style.display = "none";
    answerArea!.innerHTML = `${count}번 만에 성공하셨습니다.`;
  }
};

// 랜덤 숫자 반환
let rNumber = (): string => {
  while (randomNum.length < 3) {
    //   randomNum.push(Math.floor(Math.random() * 10));
    let num = Math.floor(Math.random() * 10);
    if (!randomNum.includes(num)) {
      randomNum.push(num);
    }
  }
  // console.log(randomNum.join(""));
  return randomNum.join("");
};

// 숫자 비교 카운팅
let cNum = (str: string): void => {
  for (let i = 0; i < 3; i++) {
    if (str[i] === userAnswer[i]) {
      strike++;
    } else if (str.includes(userAnswer[i])) {
      ball++;
    }
  }
};
// 3. 볼, 스트라이크를 표현하는 부분 구현하기
let message = (): void => {
  let content = `<ul>
  <li>${count}번째 시도 : ${userAnswer}</li>
  <li>${ball}B${strike}S</li>
  </ul>`;
  // console.log(ball, strike);
  if (userHistory_content instanceof HTMLDivElement) {
    userHistory_content.innerHTML += content;
  }
  if (userAns instanceof HTMLInputElement) {
    userAns.value = "";
  }
};
// 4. 게임 종료하는 부분 구현하기

// 게임 시작 버튼
function gameDisplay(): void {
  if (gameContainer instanceof HTMLDivElement) {
    gameContainer.classList.remove("hidden");
  }
  if (gameStartBtn instanceof HTMLButtonElement) {
    gameStartBtn.classList.add("hidden");
  }
}
// 리셋 버튼
function reset() {
  //텍스트 다 지우기
  count = 0;
  if (userHistory_content instanceof HTMLDivElement) {
    userHistory_content.innerHTML = "";
  }
  if (answerArea instanceof HTMLParagraphElement) {
    answerArea.innerHTML = "";
  }
  //랜덤숫자 다시 세팅
  randomNum = [];
}
