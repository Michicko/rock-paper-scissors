
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

console.log(getComputerChoice(), getHumanChoice())