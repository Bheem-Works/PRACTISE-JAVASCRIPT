
function rock() {
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber>=0 && randomNumber<1/3) {
        computerMove = 'rock';
    } else if(randomNumber>=1/3 && randomNumber<2/3) {
        computerMove = 'paper';
    } else if (randomNumber >=2/3 && randomNumber <1 ) {
        computerMove = 'scissors'
    }
    // reault : for store the value of the results
    let result = '';
    if(computerMove==='rock') {
        result = 'This is Ties'
    } else if(computerMove==='paper') {
        result = 'You lose!'
    } else if (computerMove==='scissors') {
        result = 'You win!'
    }

    // show in alerts 
    alert(`You have picked the rock. The computer picked ${computerMove}.The Results : ${result}`);
}

function paper() {
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber>=0 && randomNumber<1/3) {
        computerMove = 'Paper';
    } else if (randomNumber>1/3 && randomNumber <2/3) {
        computerMove = 'Rock';
    } else if (randomNumber>2/3 && randomNumber <1) {
        computerMove = 'scissors';
    }

    const result = '';
    if(computerMove==='Paper') {
        result = 'Its a tie';
    } else if (computerMove==='rock') {
        result = 'You Win!';
    } else if (computerMove==='scissors') {
        result = 'You Lose!';
    }
    // let's show in the alerts
    alert(`You have picked the paper.Computer picked the ${computerMove}.The results : ${result}`);
}

function scissors() {
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber>=0 && randomNumber<1/3) {
        computerMove = 'Paper';
    } else if (randomNumber>1/3 && randomNumber <2/3) {
        computerMove = 'Rock';
    } else if (randomNumber>2/3 && randomNumber <1) {
        computerMove = 'scissors';
    }

    const result = '';
    if(computerMove==='Paper') {
        result = 'You Win!';
    } else if (computerMove==='rock') {
        result = 'You Lose!';
    } else if (computerMove==='scissors') {
        result = 'its a ties!';
    }
    // let's show in the alerts
    alert(`You have picked the scissors.Computer picked the ${computerMove}.The results : ${result}`);
}

// so this is the code of hwo you can create a rock paper scissors by using the if else
// SEE YA BYE (SYANARO!)