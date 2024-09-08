
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
       choice = input.toLowerCase();
    } while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')

    return choice;
}

function playGame(){   
    // player scores 
    let humanScore = 0;
    let computerScore = 0;
    

    // Play round
    function playRound(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

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
        // display current round score
        console.log('Scores: ', 'Player:', humanScore,':', 'Computer:', computerScore)
    }


     // play 5 rounds
    let rounds = 5;
    while(rounds >= 1){
        playRound();
        rounds -= 1;
    }

    // check score for final winner
    if(computerScore > humanScore){
        console.log('You Lose! Computer wins');
    }else if (humanScore > computerScore){
        console.log('You WIn! Congratulations ***');
    }else{
        console.log('Draw! Reload to play again!');
    }
}

playGame();