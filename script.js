//<!-- let computerMove;
//let computerMoveOutput; -->

//computer chooses a number randomly between 1-3
//if 1 rock if 2 paper if 3 scissors
//once move is determined return string

const playerButtons = document.querySelectorAll(".player-action");
const bgSwitch = document.querySelector("#bgSwitch");

bgSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  
  playerButtons.forEach((button) => {
    button.classList.toggle("dark");
  });
});

function getComputerChoice() {
  computerMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (computerMove === 1) {
    computerMoveOutput = "rock";
    return computerMoveOutput;
  } else if (computerMove === 2) {
    computerMoveOutput = "paper";
    return computerMoveOutput;
  } else {
    computerMoveOutput = "scissors";
    return computerMoveOutput;
  }
}

//function to let the player make a game choice. prevents the user from entering non-sanctioned values
function getPlayerChoice() {
  playerChoice = prompt("What is your choice? (Rock, Paper, Scissors): ");
  if (playerChoice != "" && playerChoice != null) {
    if (
      playerChoice.toLowerCase() !== "rock" &&
      playerChoice.toLowerCase() !== "scissors" &&
      playerChoice.toLowerCase() !== "paper"
    ) {
      alert("Please only enter 'Rock, Paper, or Scissors'");
    } else {
      console.log(playerChoice + " success");
      return playerChoice.toLowerCase();
    }
  } else {
    alert("You've cancelled the operation");
  }
}

//function to start the game, it will go to a best of 5
function game() {
  let playerScore = 0;
  let computerScore = 0;

  //only allows five non-draw games to be played.
  //   while (playerScore + computerScore < 5) {
  //     alert(
  //       "Current Score: Player: " + playerScore + " Computer: " + computerScore
  //     );
  //computer choice is automated via func getComputerChoice which gives a random 1-3 and returns RPS.
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();

  playRound(playerSelection, computerSelection);
  //plays a single round of RPS. Winner depends on computer vs human choice.
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
      switch (computerSelection) {
        case "rock":
          alert("It was a draw, try again!");
          break;

        case "paper":
          return computerScore++;

          break;

        case "scissors":
          return playerScore++;
          break;
      }
    } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case "rock":
          return playerScore++;
          break;

        case "paper":
          alert("It was a draw, try again!");
          break;

        case "scissors":
          return computerScore++;
          break;
      }
    } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case "rock":
          return computerScore++;
          break;

        case "paper":
          return playerScore++;
          break;

        case "scissors":
          alert("It was a draw, try again!");
          break;
      }
    }
  }
  //   }

  //announce winner to the console
  if (playerScore > computerScore) {
    alert(
      "You win! Your Score: " +
        playerScore +
        " Computer Score: " +
        computerScore
    );
  } else {
    alert(
      "You Lose! Your Score: " +
        playerScore +
        " Computer Score: " +
        computerScore
    );
  }
}
