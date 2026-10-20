function getHumanChoice() {
    let choice = prompt("Enter 'rock', 'paper' or 'scissors' : ");
    const lowerchoice = choice.toLowerCase();
    return lowerchoice;
}

function getComputerChoice() {
    let numChoice = Math.floor(Math.random()*3 + 1);
    let choice = '';
    switch (numChoice) {
        case 1:
            choice = 'rock'
            break;
        case 2:
            choice = 'paper'
            break;
        case 3:
            choice = 'scissors'
            break;
        default:
            break;
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(rnumber) {
    console.log(`Round ${rnumber}`)
    const compChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log(`Computer selected ${compChoice}`);
    console.log(`I selected ${humanChoice}`);
    if (compChoice === humanChoice) {
        computerScore += 0;
        humanScore += 0;
    } else if(compChoice === 'rock' && humanChoice === 'paper') {
        computerScore += 1;
        humanScore += 0;
    } else if(compChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 0;
        humanScore += 1;
    } else if(compChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        humanScore += 0;
    } else if(compChoice === 'paper' && humanChoice === 'scissors') {
        computerScore += 0;
        humanScore += 1;
    } else if(compChoice === 'scissors' && humanChoice === 'rock') {
        computerScore += 0;
        humanScore += 1;
    }
    else if(compChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        humanScore += 0;
    }
    console.log(`Computer score: ${computerScore}`)
    console.log(`Human score: ${humanScore}`)
}

let round = 1;
while (round <= 5) {
    playRound(round)
    round += 1;
}

if (computerScore > humanScore) {
    alert("Computer wins!");
} else if(computerScore < humanScore) {
    alert("Computer wins!");
} else alert("It's a tie!");