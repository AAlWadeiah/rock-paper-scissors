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

// console.log(getComputerChoice());
// console.log(getHumanChoice());
