let humanScore = 0;
let computerScore = 0;

console.log("Hello World!");

function getComputerChoice() {
    const result = Math.random();
    if (result < 1/3) {
        return "rock";
    } else if (result < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerResult = getComputerChoice()

console.log(computerResult);

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const currentSelection = document.querySelector("#currentSelection");
console.log("currentSelection: ", currentSelection);


rockButton.addEventListener("click", function (e) {
  // console.log(e.originalTarget.id);
  currentSelection.textContent = e.originalTarget.id;
  console.log("currentSelection in el: ", currentSelection.textContent); 
  currentSelection.id = "result";
});

paperButton.addEventListener("click", function (e) {
  // console.log(e.originalTarget.id);
  currentSelection.textContent = e.originalTarget.id;
  currentSelection.id = "result";
});

scissorsButton.addEventListener("click", function (e) {
  // console.log(e.originalTarget.id);
  currentSelection.textContent = e.originalTarget.id;
  currentSelection.id = "result";
});


function getHumanChoice() {
  // let choice = prompt("Enter Rock, Paper, or Scissors:"); // gets input as a string
  return currentSelection.textContent; // make it lowercase to keep it consistent
}

const humanResult = getHumanChoice()

console.log("Human Result: ", humanResult);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    currentSelection.textContent = `humanScore ${humanScore} :: computerScore ${computerScore}`
    if (humanScore > 5) {
      console.log("----- Game Over -----");
      console.log(`Final Score — Human: ${humanScore}, Computer: ${computerScore}`);
      console.log("💻 Human wins the game!");
    }
    if (computerScore > 5) {
      console.log("----- Game Over -----");
      console.log(`Final Score — Human: ${humanScore}, Computer: ${computerScore}`);
      console.log("💻 Computer wins the game!");
    }

}

// playRound(humanResult, computerResult)

function playGame() {
    // reset scores before starting
    humanScore = 0;
    computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //   const humanChoice = getHumanChoice();
    //   const computerChoice = getComputerChoice();
    //   playRound(humanChoice, computerChoice);
    // }

    rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

playGame();