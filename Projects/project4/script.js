let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const slot=document.querySelector('.guesses');

const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess);
    })
}
function validateGuess(guess){
    // between 1 to 100 or not
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number greater than 0');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // check if value is equal or not
    if(guess===randomNumber){
        displayMessage("You Guessed it right");
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage("Number is too low");
    }
    else{
        displayMessage("Number is too high");
    }

}

function displayGuess(guess){
    // clean values for next guess
    userInput.value='';
    slot.innerHTML+=`${guess} `;
    numGuess++; 
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameBtn=document.querySelector('#newGame');
    newGameBtn.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        slot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}
