const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const available = [rock, paper, scissors];
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

/**
 * Get random number between lower and upper
 * @param {number} lower lower bound
 * @param {number} upper upper bound
 * @returns {number} random int number between lower and upper
 */
function getRandomNumber(lower, upper) {
    return Math.round(Math.random() * upper) + lower;
}

function getComputerChoice() {
    return available[getRandomNumber(0, available.length - 1)];
}

/**
 *
 * @param {"rock" | "paper" | "scissors"} weapon
 * @returns {string} winning message
 */
function winMessage(weapon) {
    const rockBeatsScissors = "You Win! Rock beats Scissors";
    const scissorsBeatsPaper = "You Win! Scissors beat Paper";
    const paperBeatsRock = "You Win! Paper beats Rock";
    if (weapon === rock) return rockBeatsScissors;
    if (weapon === scissors) return scissorsBeatsPaper;
    if (weapon === paper) return paperBeatsRock;
}

/**
 *
 * @param {"rock" | "paper" | "scissors"} weapon
 * @returns {string} losing message
 */
function loseMessage(weapon) {
    const rockBeaten = "You Lose! Rock is beaten by Paper";
    const scissorsBeaten = "You Lose! Scissors is beaten by Rock";
    const paperBeaten = "You Lose! Paper is beaten by Scissors";
    if (weapon === rock) return rockBeaten;
    if (weapon === scissors) return scissorsBeaten;
    if (weapon === paper) return paperBeaten;
}

/**
 * play a single round of rock paper scissors
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns {number} round result
 */
function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === rock) {
        if (computerSelection === scissors) return 1; // winMessage(rock);
        if (computerSelection === paper) return -1; // loseMessage(rock);
    }
    if (playerSelection === paper) {
        if (computerSelection === rock) return 1; // winMessage(paper);
        if (computerSelection === scissors) return -1; // loseMessage(paper);
    }
    if (playerSelection === scissors) {
        if (computerSelection === paper) return 1; // winMessage(scissors);
        if (computerSelection === rock) return -1; // loseMessage(scissors);
    }
    return 0; // "It's a draw!";
}

function onGameOver() {
    const gameWinMessage =
        "You win against THE ALMIGHTY COMPUTER! Humanity is saved, all thanks to YOU!";
    const gameLoseMessage =
        "You lose! THE ALMIGHTY COMPUTER rules! Now humanity is doomed!";
    const gameOverMessage = document.getElementById("message");
    const gameOverDiv = document.querySelector(".game-over");
    gameOverDiv.classList.remove("hidden");
    const options = document.querySelectorAll(".option button");
    options.forEach((btn) => btn.classList.add("disabled"));
    if (playerScore > computerScore) {
        gameOverMessage.textContent = gameWinMessage;
        alert(gameWinMessage);
    } else {
        gameOverMessage.textContent = gameLoseMessage;
        alert(gameLoseMessage);
    }
}

/**
 * get player's weapon of choice
 * @param {Event} e
 * @returns {string}
 */
function onPlayerChooseWeapon(e) {
    console.log(e.target.value);
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.value;
    let result = playSingleRound(playerChoice, computerChoice);
    let matchDetailText = document.getElementById("match-detail");
    matchDetailText.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`;
    gameOver = updateScore(result, playerChoice);
    if (gameOver) onGameOver();
    return e.target.value;
}

/**
 *
 * @param {number} matchResult result of single round match
 * @param {rock | paper | scissors} playerChoice
 * @returns {boolean} state of the match
 */
function updateScore(matchResult, playerChoice) {
    let playerScoreText = document.getElementById("player-score");
    let computerScoreText = document.getElementById("computer-score");
    let matchStatusText = document.getElementById("match-status");
    if (matchResult > 0) {
        playerScore++;
        playerScoreText.textContent = playerScore;
        matchStatusText.textContent = winMessage(playerChoice);
    }
    if (matchResult < 0) {
        computerScore++;
        computerScoreText.textContent = computerScore;
        matchStatusText.textContent = loseMessage(playerChoice);
    }
    if (matchResult === 0) {
        matchStatusText.textContent = "It's a draw!";
    }
    return playerScore === 5 || computerScore === 5;
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    startButton.classList.add("hidden");
    let controls = document.querySelector(".option");
    let scoreDiv = document.querySelector(".scores-container");
    const options = document.querySelectorAll(".option button");
    options.forEach((btn) => btn.classList.remove("disabled"));
    controls.classList.remove("hidden");
    scoreDiv.classList.remove("hidden");
}

const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const startButton = document.getElementById("start-btn");
const replayButton = document.querySelector(".game-over button");

rockButton.addEventListener("click", onPlayerChooseWeapon);
paperButton.addEventListener("click", onPlayerChooseWeapon);
scissorsButton.addEventListener("click", onPlayerChooseWeapon);
startButton.addEventListener("click", startGame);
replayButton.addEventListener("click", startGame);
