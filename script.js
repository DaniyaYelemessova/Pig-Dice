function PigDice(player, score) {
  this.player = player;
  this.score = score;
  this.currentScore = [];
  this.totalScore = [];
}

const player1 = new PigDice("Player1", 0);
const player2 = new PigDice("Player2", 0);

PigDice.prototype.getCurrentScore = function (num) {
  if (num === 1) {
    this.currentScore = [];
  } else {
    this.currentScore.push(num);
  }
  return this.currentScore;
};

PigDice.prototype.getTotalScore = function (num) {
  if (num !== 1) {
    this.totalScore.push(num);
  }
  return this.totalScore;
};

PigDice.prototype.currentScoreSum = function () {
  return this.currentScore.reduce((a, b) => a + b, 0);
};

PigDice.prototype.totalScoreSum = function () {
  return this.totalScore.reduce((a, b) => a + b, 0);
};

function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

const randomNum = randomNumber();

function reset() {
  const totalScore = document.querySelector("#total");
  const currentScore = document.querySelector("#current");
  const totalScore2 = document.querySelector("#total2");
  const currentScore2 = document.querySelector("#current2");
  totalScore.innerHTML = 0;
  currentScore.innerHTML = 0;
  totalScore2.innerHTML = 0;
  currentScore2.innerHTML = 0;
}

function holdBtnOne(num) {
  const holdBtn1 = document.querySelector(".hold1");
  const playBtn = document.querySelector(".play1");
  const playBtn2 = document.querySelector(".play2");
  const diceCirce = document.querySelector("#diceCirce");
  const totalScore = document.querySelector("#total");
  holdBtn1.addEventListener("click", (e) => {
    playBtn.setAttribute("disabled", true);
    playBtn2.removeAttribute("disabled", true);
    diceCirce.innerText = `Dice: 0`;
  });

  if (num === 1) {
    playBtn.setAttribute("disabled", true);
    playBtn2.removeAttribute("disabled", true);
  }

}

function holdBtnTwo(num) {
  const playBtn = document.querySelector(".play1");
  const holdBtn2 = document.querySelector(".hold2");
  const playBtn2 = document.querySelector(".play2");
  holdBtn2.addEventListener("click", (e) => {
    playBtn2.setAttribute("disabled", true);
    playBtn.removeAttribute("disabled", true);

    
  });

  if (num === 1) {
    playBtn2.setAttribute("disabled", true);
    playBtn.removeAttribute("disabled", true);
  }
}

function playGameOne() {
  const playBtn = document.querySelector(".play1");
  const playBtn2 = document.querySelector(".play2");
  const holdBtn1 = document.querySelector(".hold1");
  const holdBtn2 = document.querySelector(".hold2");
  const totalScore = document.querySelector("#total");
  const currentScore = document.querySelector("#current");
  const diceCirce = document.querySelector("#diceCirce");
  const win = document.querySelector(".hidden");

  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const randomNum = randomNumber();

    player1.getCurrentScore(randomNum);
    player1.getTotalScore(randomNum);

    diceCirce.innerText = `Dice: ${randomNum}`;
    currentScore.innerText = player1.currentScoreSum();
    totalScore.innerText = player1.totalScoreSum();
    holdBtnOne(randomNum);
    if (player1.totalScoreSum() >= 100) {
      win.style.display = "block";
      playBtn.setAttribute("disabled", true);
      playBtn2.setAttribute("disabled", true);
      holdBtn1.setAttribute("disabled", true);
      holdBtn2.setAttribute("disabled", true);
      reset();
    }
  });
}

function playGameTwo() {
  const playBtn = document.querySelector(".play1");
  const holdBtn1 = document.querySelector(".hold1");
  const holdBtn2 = document.querySelector(".hold2");
  const playBtn2 = document.querySelector(".play2");
  const totalScore2 = document.querySelector("#total2");
  const currentScore2 = document.querySelector("#current2");
  const diceCirce2 = document.querySelector("#diceCirce2");
  const win2 = document.querySelector(".hidden2");

  playBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    const randomNum = randomNumber();
    player2.getCurrentScore(randomNum);
    player2.getTotalScore(randomNum);
    
    diceCirce2.innerText = `Dice: ${randomNum}`;
    currentScore2.innerText = player2.currentScoreSum();
    totalScore2.innerText = player2.totalScoreSum();
    holdBtnTwo(randomNum);
    if (player2.totalScoreSum() >= 100) {
      win2.style.display = "block";
      playBtn.setAttribute("disabled", true);
      playBtn2.setAttribute("disabled", true);
      holdBtn1.setAttribute("disabled", true);
      holdBtn2.setAttribute("disabled", true);
      reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  playGameOne();
  playGameTwo();
  holdBtnOne();
  holdBtnTwo();
});
