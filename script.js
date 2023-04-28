
const playerButtons = document.querySelectorAll(".player-action");
const bgSwitch = document.querySelector("#bgSwitch");
const playerScoreboard = document.querySelector("#playerScoreboard");
const computerScoreboard = document.querySelector("#computerScoreboard");
let computerChoiceImage = document.getElementById('computerChoiceImage');
const gameAnnouncement = document.getElementById('gameAnnouncement')

let playerScore = 0;
let computerScore = 0;

//toggle light or dark mode
bgSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  playerButtons.forEach((button) => {
    button.classList.toggle("dark");
  });
});

//listen for each of the buttons and declare the players selection for the one chosen
playerButtons.forEach((playerButtons) => {
  playerButtons.addEventListener("click", () => {
    playerSelection = playerButtons.id;

    playRound(playerSelection);
  });
});

//computer chooses a number randomly between 1-3
//if 1 rock if 2 paper if 3 scissors once move is determined return string
function getComputerChoice() {
  computerMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (computerMove === 1) {
    computerMoveOutput = "rock";
    console.log(computerChoiceImage);
    computerChoiceImage.src = "./images/misc-pet-rock.svg";
    return computerMoveOutput;
  } else if (computerMove === 2) {
    computerMoveOutput = "paper";
    console.log(computerChoiceImage);
    computerChoiceImage.src = "./images/loose_leaf_paper.svg";

    return computerMoveOutput;
  } else {
    computerMoveOutput = "scissors";
    console.log(computerChoiceImage);
    computerChoiceImage.src = "./images/Machovka-Scissors-1.svg";

    return computerMoveOutput;
  }
}

//function to let the player make a game choice. prevents the user from entering non-sanctioned values
function getPlayerChoice() {
  // playerChoice = prompt("What is your choice? (Rock, Paper, Scissors): ");
  // if (playerChoice != "" && playerChoice != null) {
  //   if (
  //     playerChoice.toLowerCase() !== "rock" &&
  //     playerChoice.toLowerCase() !== "scissors" &&
  //     playerChoice.toLowerCase() !== "paper"
  //   ) {
  //     alert("Please only enter 'Rock, Paper, or Scissors'");
  //   } else {
  //     console.log(playerChoice + " success");
  //     return playerChoice.toLowerCase();
  //   }
  // } else {
  //   alert("You've cancelled the operation");
  // }
}
//player wins the round and gets the score
function roundWon(){
  gameAnnouncement.textContent = "You win the round!";
  playerScore++;
}

//player lost the round and gets the score
function roundLost(){
  gameAnnouncement.textContent = "You lost the round!";
  computerScore++;
}

//player and computer had a draw. no one gets a score
function roundDraw() {
  gameAnnouncement.textContent = "This round was a draw, play again!";
}
//plays a single round of RPS. Winner depends on computer vs human choice.
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  console.log("Player Selection function started");
  console.log("Play Sel: " + playerSelection);
  console.log("Comp Sel: " + computerSelection);

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        roundDraw;
        break;

      case "paper":
        roundLost;

        break;

      case "scissors":
        roundWon
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        playerScore++;
        break;

      case "paper":
        console.log("draw");
        break;

      case "scissors":
        computerScore++;
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        computerScore++;
        break;

      case "paper":
        playerScore++;
        break;

      case "scissors":
        console.log("draw");
        break;
    }
  }

  //announce winner to the console
  if (playerScore === 5 || computerScore === 5) {
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
    console.log("PS: " + playerScore);
    playerScoreboard.textContent = playerScore;
    console.log("CS: " + computerScore);
    computerScoreboard.textContent = computerScore;

  } else {

  console.log("PS: " + playerScore);
  playerScoreboard.textContent = playerScore;
  console.log("CS: " + computerScore);
  computerScoreboard.textContent = computerScore;
}
}
