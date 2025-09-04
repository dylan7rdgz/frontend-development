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


function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:"); // gets input as a string
    return choice.toLowerCase(); // make it lowercase to keep it consistent
  }
  
// const humanResult = getHumanChoice()

// console.log(humanResult);

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
}

// playRound(humanResult, computerResult)


function playGame() {
    // reset scores before starting
    humanScore = 0;
    computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }
  
    console.log("----- Game Over -----");
    console.log(`Final Score — Human: ${humanScore}, Computer: ${computerScore}`);
  
    if (humanScore > computerScore) {
      console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
      console.log("💻 Computer wins the game!");
    } else {
      console.log("🤝 It's a tie game!");
    }
  }

playGame();