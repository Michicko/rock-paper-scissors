let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);
    let choice;
    if(random == 0){
        choice = 'rock';
    }else if(random == 1){
        choice = 'paper';
    }else if (random == 2){
        choice = 'scissors';
    }    
    return choice
}

function getHumanChoice(){
    let input = '';
    let choice = '';

    do {
       input = prompt('Choose between rock, paper and scissors: ');
       choice = input.toLowerCase();
    } while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')

    return choice;
}

function playRound(humanChoice, computerChoice){
        if(
            (humanChoice == 'rock' && computerChoice == 'rock') || 
            (humanChoice === 'paper' && computerChoice == 'paper') ||
            ( humanChoice == 'scissors' && computerChoice == 'scissors')
        ){
           console.log('Draw!');
        } else if (humanChoice == 'rock'){
            if(computerChoice == 'paper'){
                computerScore += 1;
               console.log("You lose! Paper beats Rock");
            }else if(computerChoice == 'scissors'){
                humanScore += 1;
               console.log("You win! Rock beats Scissors");
            }
        } else if(humanChoice == 'paper'){
            if(computerChoice == 'rock'){
                humanScore += 1;
               console.log("You win! Paper beats Rock");
            }else if(computerChoice == 'scissors'){
                computerScore += 1;
               console.log("You lose! Scissors beats Paper");
            }
        }else if(humanChoice == 'scissors'){
            if(computerChoice == 'rock'){
                computerScore += 1;
               console.log("You lose! Rock beats Scissors");
            }else if(computerChoice == 'paper'){
                humanScore += 1;
               console.log("You win! Scissors beats Paper");
            }
        }

        console.log('Scores: ', 'Player:', humanScore,':', 'Computer:', computerScore)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const playerScores = {
    humanScore, computerScore
}

playRound(humanSelection, computerSelection)
