let answerBtn = document.getElementById("answerBtn");
let userAns = document.getElementById("userAnswer");
let gameArea = document.getElementById("gameArea");
let answerArea = document.getElementById("answerArea");
let userAnswer = "";
let randomNum = [];
let ball;
let strike;
let count = 0;

answerBtn.addEventListener("click", () => {
  // 클릭할 때 마다 초기화
  ball = 0;
  strike = 0;
  userAnswer = userAns.value;
  let randomStr = rNumber();
  cNum(randomStr);
  console.log(`${ball}B${strike}S`);
  count++;
  gemeover(strike)
})

gemeover = (strike) => {
  console.log(strike);
  if(strike === 3){
    gameArea.style.display="none";
    answerArea.innerHTML=`${count}번 만에 성공하셨습니다.`
  }

}

// 랜덤 숫자 반환
rNumber = () => {
  while (randomNum.length < 3) {
    //   randomNum.push(Math.floor(Math.random() * 10));
    let num = Math.floor(Math.random() * 10);
    if (!randomNum.includes(num)) {
      randomNum.push(num);
    }
  }
  console.log(randomNum.join(""));
  return randomNum.join("");
}

// 숫자 비교 카운팅
cNum = (str) => {
  for (let i = 0; i < 3; i++) {
    if (str[i] === userAnswer[i]) {
      strike++;
    } else if (str.includes(userAnswer[i])) {
      ball++;
    }
  }
  // 3. 볼, 스트라이크를 표현하는 부분 구현하기
  
}


// 4. 게임 종료하는 부분 구현하기
