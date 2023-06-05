var playerScore = 0;
var cpuScore = 0;
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

    // for (var i = 0; i < 5; i++) {
        
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
            document.getElementById("eachPlay").innerHTML = `you: ${playerSelection}  |  pc: ${computerSelection}`;

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

                // html
                if (playerScore > cpuScore) {
                    document.getElementById("winLose").innerHTML = `you won! your score is: ${playerScore}`;
                } else if (playerScore < cpuScore) {
                    document.getElementById("winLose").innerHTML = `you lost! your score is: ${playerScore}`;
                } else {
                    document.getElementById("winLose").innerHTML = `you drew! your score is: ${playerScore}`;
                }
    
        // console.log
        if (playerScore == 5 || cpuScore == 5) {
            if (playerScore > cpuScore) {
            console.log("You Won! Your score was: " + playerScore);
            } else if (playerScore < cpuScore) {
                console.log("You Lost! Your score was: " + playerScore);
            } else {
                console.log("You Drew! Your score was: " + playerScore);
            }
        }
    }

function rockButtonClick() {
    playerChoice = 'rock';
    game()
}

function paperButtonClick() {
    playerChoice = 'paper';
    game()
}

function scissorButtonClick() {
    playerChoice = 'scissors';
    game()
}