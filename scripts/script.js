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
 * play a single round of rock paper scissors
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns {string} round result
 */
function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!available.includes(playerSelection))
        return (
            "Error! Player selection not in Rock, Paper, Scissors! You can't bring " +
            playerSelection +
            " here!"
        );
    computerSelection = computerSelection.toLowerCase();
    const rockBeatsScissors = "Rock beats Scissors";
    const scissorsBeatsPaper = "Scissors beat Paper";
    const paperBeatsRock = "Paper beats Rock";
    const youWin = "You Win! ";
    const youLose = "You Lose! ";
    if (playerSelection === rock) {
        if (computerSelection === paper) return youLose + paperBeatsRock;
        if (computerSelection === scissors) return youWin + rockBeatsScissors;
    }
    if (playerSelection === paper) {
        if (computerSelection === rock) return youWin + paperBeatsRock;
        if (computerSelection === scissors) return youLose + scissorsBeatsPaper;
    }
    if (playerSelection === scissors) {
        if (computerSelection === paper) return youWin + scissorsBeatsPaper;
        if (computerSelection === rock) return youLose + rockBeatsScissors;
    }
    return "It's a draw!";
}
