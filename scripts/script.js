const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const available = [rock, paper, scissors];

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

/**
 * get player's weapon of choice
 * @returns {string}
 */
function getUserWeapon() {
    let valid = false;
    let playerChoice = "";
    while (!valid) {
        playerChoice = prompt("Choose your weapon: Rock, Paper, or Scissors?");
        if (!available.includes(playerChoice))
            alert(
                "Error! Player selection not in Rock, Paper, Scissors! You can't bring " +
                    playerChoice +
                    " here!"
            );
        else valid = true;
    }
    return playerChoice;
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = getUserWeapon();
        let computerChoice = getComputerChoice();
        console.log("It is: " + playerChoice + " vs " + computerChoice);
        let result = playSingleRound(playerChoice, computerChoice);
        if (result === 1) console.log(winMessage(playerChoice));
        if (result === -1) console.log(loseMessage(playerChoice));
        if (result === 0) console.log("It's a draw!");
        score += result;
    }
    if (score > 0) console.log("You win the game!");
    else if (score < 0) console.log("You lose the game!");
    else console.log("It is a draw! What a fierce game");
}
