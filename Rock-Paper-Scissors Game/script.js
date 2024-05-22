//SETUP ARRAY FOR WHICH THE COMPUTER WILL SELECT A CHOICE
const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector(".computerChoiceDisplay");
const gameResultDisplay = document.querySelector(".gameResultDisplay");
const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let gameResult = "";

  gameResult =
    computerChoice === playerChoice
      ? "Tie Game"
      : (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
      ? "Computer Wins!"
      : "Player Wins!";

  playerChoiceDisplay.textContent = `Player:${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer:${computerChoice}`;
  gameResultDisplay.textContent = `${gameResult}`;

  gameResultDisplay.classList.remove("redText", "greenText");

  switch (gameResult) {
    case "Computer Wins!":
      gameResultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = `${computerScore}`;
      break;
    case "Player Wins!":
      gameResultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = `${playerScore}`;
      break;
  }
}
