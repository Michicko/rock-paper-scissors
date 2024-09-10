const playerOptionsDiv = document.querySelector('.btns');
const playerOptions = playerOptionsDiv.querySelectorAll('button');
const roundWinner = document.querySelector('.round-winner');
const restartBtn = document.querySelector('#play-again');
const humanScore = document.querySelector('.score.p');
const computerScore = document.querySelector('.score.c');
const gameWinner = document.querySelector('.game-winner');

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

function showRoundWinner(text){
    roundWinner.textContent = text;
    roundWinner.style.display = 'block';
}

function startNewRound(){
    playerOptionsDiv.style.display = 'flex';
    restartBtn.style.display = 'none';
    roundWinner.style.display = 'none';
}

function updateScore(winner){
    if(winner === 'player'){
        humanScore.textContent = +humanScore.textContent + 1
    }else if(winner === 'computer'){
        computerScore.textContent = +computerScore.textContent + 1;
    }
}

function endRound(){
    playerOptionsDiv.style.display = 'none';
    restartBtn.style.display = 'block';
}

function showGameWinner(text){
    gameWinner.textContent = text; 
    gameWinner.style.display = 'block';
}

function endGame(hs, cs){
    let winnerText;

    if(hs > cs){
        winnerText = 'You Win! Congratulations! ***'
    }else{
        winnerText =  'You Lose! Computer wins!'
    }

    showGameWinner(winnerText);
    restartBtn.style.display = 'none';
    playerOptionsDiv.style.display = 'none';
    roundWinner.style.display = 'none';
    playerOptions.forEach((option) => {
        option.removeEventListener('click', playRound);
    })
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
        showRoundWinner("Draw!")
    } else if (humanChoice == 'rock'){
        if(computerChoice == 'paper'){
            roundWinner = 'computer';
            showRoundWinner("You lose! Paper beats Rock")
        }else if(computerChoice == 'scissors'){
            roundWinner = 'player';
            showRoundWinner("You win! Rock beats Scissors")
        }
    } else if(humanChoice == 'paper'){
        if(computerChoice == 'rock'){
            roundWinner = 'player';
            showRoundWinner("You win! Paper beats Rock")
        }else if(computerChoice == 'scissors'){
            roundWinner = 'computer';
            showRoundWinner("You lose! Scissors beats Paper");
        }
    }else if(humanChoice == 'scissors'){
        if(computerChoice == 'rock'){
            roundWinner = 'computer';
            showRoundWinner("You lose! Rock beats Scissors");
        }else if(computerChoice == 'paper'){
            roundWinner = 'player';
            showRoundWinner("You win! Scissors beats Paper");
        }
    }

    updateScore(roundWinner);
    const hs = +humanScore.textContent;
    const cs = +computerScore.textContent;
    if(hs === 5 || cs === 5){
        endGame(hs, cs);
    }else{
        endRound();
    }
   
}
    
playerOptions.forEach((playerOption) => {
    playerOption.addEventListener('click', playRound);
})
restartBtn.addEventListener('click', startNewRound);