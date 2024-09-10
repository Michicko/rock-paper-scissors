const playerOptionsDiv = document.querySelector('.btns');
const playerOptions = playerOptionsDiv.querySelectorAll('button');

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

function playRound(e){
    let humanChoice = e.target.textContent.toLowerCase();
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
    // return roundWinner;
    console.log(roundWinner);
}

    // let humanScore = 0;
    // let computerScore = 0;

    // // manage player scores
    // if (roundWinner === 'player'){
    //     humanScore += 1;
    // }else if(roundWinner === 'computer'){
    //     computerScore += 1;
    // }

    // display current round score
    // console.log('Scores: ', 'Player:', humanScore,':', 'Computer:', computerScore)

    // if (roundWinner === 'draw'){
    //   rounds += 1;   
    // }
    
    // // check score for final winner
    // if(computerScore > humanScore){
    //     console.log('You Lose! Computer wins!');
    // }else if (humanScore > computerScore){
    //     console.log('You Win! Congratulations! ***');
    // }

    playerOptions.forEach((playerOption) => {
        playerOption.addEventListener('click', playRound);
    })