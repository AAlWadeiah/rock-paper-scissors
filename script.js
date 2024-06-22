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

function getHumanChoice() {
  let choice;
  do {
    choice = prompt(
      "Make a choice: rock, paper, scissors",
      "rock"
    ).toLowerCase();
  } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");

  return choice;
}

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
}

let humanScore = 0;
let computerScore = 0;

// console.log(getComputerChoice());
// console.log(getHumanChoice());
