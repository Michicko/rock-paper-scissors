
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
       input = prompt('Rock! Paper! Scissors!');
       if(!input){
        console.log('Canceled! Reload to play again!');
        return;
       }
       choice = input.toLowerCase();
    } while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')

    return choice;
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let roundWinner;

    if(
        (humanChoice == 'rock' && computerChoice == 'rock') || 
        (humanChoice === 'paper' && computerChoice == 'paper') ||
        ( humanChoice == 'scissors' && computerChoice == 'scissors')
    ){
        roundWinner = 'draw';
        console.log('Draw!');
    } else if (humanChoice == 'rock'){
        if(computerChoice == 'paper'){
            roundWinner = 'computer';
            console.log("You lose! Paper beats Rock");
        }else if(computerChoice == 'scissors'){
            roundWinner = 'player';
            console.log("You win! Rock beats Scissors");
        }
    } else if(humanChoice == 'paper'){
        if(computerChoice == 'rock'){
            roundWinner = 'player';
            console.log("You win! Paper beats Rock");
        }else if(computerChoice == 'scissors'){
            roundWinner = 'computer';
            console.log("You lose! Scissors beats Paper");
        }
    }else if(humanChoice == 'scissors'){
        if(computerChoice == 'rock'){
            roundWinner = 'computer';
            console.log("You lose! Rock beats Scissors");
        }else if(computerChoice == 'paper'){
            roundWinner = 'player';
            console.log("You win! Scissors beats Paper");
        }
    }
    return roundWinner;
}

function playGame(){   
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    
    // play rounds
    while(rounds >= 1){
        const roundWinner = playRound();

        // if canceled game
        if(!roundWinner){
            break;
        }

        // manage player scores
        if (roundWinner === 'player'){
            humanScore += 1;
        }else if(roundWinner === 'computer'){
            computerScore += 1;
        }

        // display current round score
        console.log('Scores: ', 'Player:', humanScore,':', 'Computer:', computerScore)

        rounds -= 1;
        if (roundWinner === 'draw'){
          rounds += 1;   
        }
    }

    // check score for final winner
    if(computerScore > humanScore){
        console.log('You Lose! Computer wins!');
    }else if (humanScore > computerScore){
        console.log('You Win! Congratulations! ***');
    }
}

playGame();

// restructured the play round to return current round winner
// kept track of player scores
// Replay round if draw 
// handle canceled game