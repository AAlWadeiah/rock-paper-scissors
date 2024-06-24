function getComputerChoice() {
  let rand = Math.round(Math.random() * 100);
  let randChoice = rand % 3;
  switch (randChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
// TODO: obselete function. Delete after done project
// function getHumanChoice() {
//   let choice;
//   do {
//     choice = prompt(
//       "Make a choice: rock, paper, scissors",
//       "rock"
//     ).toLowerCase();
//   } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");

//   return choice;
// }

function playRound(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      winner = "human";
      console.log("You win! Rock beats scissors");
    } else if (computerChoice === "paper") {
      winner = "cpu";
      console.log("You lose! Paper beats rock");
    } else {
      winner = "tie";
      console.log("Tie!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      winner = "cpu";
      console.log("You lose! Scissors beats paper");
    } else if (computerChoice === "rock") {
      winner = "human";
      console.log("You win! Paper beats rock");
    } else {
      winner = "tie";
      console.log("Tie!");
    }
  } else {
    if (computerChoice === "paper") {
      winner = "human";
      console.log("You win! Scissors beats paper");
    } else if (computerChoice === "rock") {
      winner = "cpu";
      console.log("You lose! Rock beats scissors");
    } else {
      winner = "tie";
      console.log("Tie!");
    }
  }
  totalRounds++;
  return winner;
}

function updateScore(roundWinner) {
  if (roundWinner === "human") {
    humanScore++;
    let humanScoreCard = document.querySelector("#human-score");
    humanScoreCard.innerText = `Human: ${humanScore}`;
  } else if (roundWinner === "cpu") {
    computerScore++;
    let cpuScoreCard = document.querySelector("#cpu-score");
    cpuScoreCard.innerText = `Computer: ${computerScore}`;
  }
}

function playGame(numOfRounds = 5) {
  for (let i = 0; i < numOfRounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  let scoreString = `Human: ${humanScore}, Computer: ${computerScore}`;
  console.log(scoreString);
}

function resetGameScreen() {
  humanScore = 0;
  computerScore = 0;
  let humanScoreCard = document.querySelector("#human-score");
  humanScoreCard.innerText = `Human: 0`;
  let cpuScoreCard = document.querySelector("#cpu-score");
  cpuScoreCard.innerText = `Computer: 0`;
  totalRounds = 0;
}

let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;

// playGame(3);

// playRound(getHumanChoice(), getComputerChoice());

// console.log(getComputerChoice());
// console.log(getHumanChoice());

// create new function to handle button click events for all three game buttons
// when user clicks button, get the value based on the button ID and return that in the choice variable
function gameButtonClickHandler(e) {
  let target = e.target;
  switch (target.id) {
    case "rock-btn":
      updateScore(playRound("rock", getComputerChoice()));
      break;
    case "paper-btn":
      updateScore(playRound("paper", getComputerChoice()));
      break;
    case "scissors-btn":
      updateScore(playRound("scissors", getComputerChoice()));
      break;
  }
  if (totalRounds > 4) {
    let victoryText =
      humanScore > computerScore
        ? "You won! Humanity prevails once again! 💪"
        : computerScore > humanScore
        ? "The computer won 🤖 The Matrix is one step closer to controlling humanity!"
        : "Its a tie 🤷 The battle for humanity continues";
    let body = document.querySelector("body");
    let winnerBanner = document.createElement("h1");
    winnerBanner.classList.toggle("winner-banner");
    winnerBanner.innerText = victoryText;
    body.appendChild(winnerBanner);

    // reset game screen to start over
    resetGameScreen();
  }
}

let buttonContainer = document.querySelector(".btn-container");

buttonContainer.addEventListener("click", gameButtonClickHandler);
