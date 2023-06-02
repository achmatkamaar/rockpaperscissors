const win = "You Won!"
const lose = "You Lost!"
const draw = "You Drew!"
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomString = Math.floor(Math.random() * choices.length);
    const computer = (choices[randomString]);
    return computer;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return 0
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return 1
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return 2
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return 3
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return 4
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return 5
    } else if (playerSelection == computerSelection) {
        return 6
    }
};

function game() {

    var playerScore = 0;
    var cpuScore = 0;

    for (var i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper or Scissors? ");
        const playerSelection = playerChoice.toLowerCase();
        const computerSelection = getComputerChoice();

        var result = playRound(playerSelection, computerSelection);
            if (result <= 2) {
                playerScore += 1
            } else if (result > 2 && result < 6) {
                cpuScore += 1
            }
             
            console.log(playerSelection);
            console.log(computerSelection);
            console.log(playerScore);
            console.log(cpuScore);

                if (result == 0) {
                    console.log("You Won!");
                } else if (result == 1) {
                    console.log("You Won!");
                } else if (result == 2) {
                    console.log("You Won!");
                } else if (result == 3) {
                    console.log("You Lose! Paper beats Rock!");
                } else if (result == 4) {
                    console.log("You Lose! Scissors! beats Paper");
                } else if (result == 5) {
                    console.log("You Lose! Rock beats Scissors!");
                } else {
                    console.log("You Drew!");
                }

    }

    if (playerScore > cpuScore) {
        console.log("You Won! Your score was: " + playerScore);
    } else if (playerScore < cpuScore) {
        console.log("You Lost! Your score was: " + playerScore);
    } else {
        console.log("You Drew! Your score was: " + playerScore);
    }
}

game();