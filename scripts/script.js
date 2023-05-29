const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const available = [rock, paper, scissors];

/**
 * Get random number between lower and upper
 * @param {number} lower lower bound
 * @param {number} upper upper bound
 * @returns {number}
 */
function getRandomNumber(lower, upper) {
    return Math.round(Math.random() * upper) + lower;
}

function getComputerChoice() {
    return available[getRandomNumber(0, available.length - 1)];
}
