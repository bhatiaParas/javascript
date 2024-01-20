let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;//hmara guess 1 se start hoga..jub 10 guessess pure ho jayenge to vo block kar dega submit guess ko...hum disable kar denge submit guess ko..

let playGame = true;


//sabse pehle dekhenge ap game khelne ke liye available ha bi nahi 
if(playGame){
    submit.addEventListener('click',function(e){
//ye ek form ha to values server me chale jayege..to values ko rokne ke liye e.preventdefault() karna padega ....
e.preventDefault();

   const guess = parseInt(userInput.value);
   console.log(guess);
   validateGuess(guess);
    })
}



function validateGuess(guess){
    //isme hum check karenge usne valid number ha ki nahi..kahi value negative to nhi de raha..or humne game hi 1 se hundered tuk bnaya ha agar vo value hi 500 de raha ha to bi thik baat nahi ha..
       
     if(guess <1 || guess >100 || isNaN(guess)){
        alert('Please enter a valid number ');
     }

     else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over.Random number was ${randomNumber}`);
            endGame()
        }
        else{
            checkGuess(guess);
            displayGuess(guess);
        }
     }
}


function checkGuess(guess){
    //ye check karega kahi value random number ke equal to nhi ha...agara ha to display message ka use karke bol do jeet gye ho game...lowOrHi....

if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
}
else if(guess < randomNumber){
    displayMessage(`Number is Too Low`);
}
else if(guess > randomNumber){
    displayMessage(`Number is Too High`);
}

}

function displayGuess(guess){//isko hum clean up guess bi bol sakte ha.....kuki isme hum sub kuch clean kar rahe ha ..................
    //ye wala function values ko clean karega...same values nahi lene ha...apke previous guess ko bi update karega ...or guess remaining ko bi update karega 

    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;//Previous guesses ko batane wala ha 
    numGuess++;

    remaining.innerHTML = `${11 - numGuess}` //guess remaining karega
}

function displayMessage(message){
    //ye wala method sidha DOM ke sath interact karega..ye messaage print karega...isme hum user ko ji input value ha usko hum empty kardenge..innerHTML me guess ko add kardenge or guess ko kam kar denge..humne lowOrHi querSelector liya ha usme hum message pass karenge to vo usko asit print kardega ..
       


    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
     userInput.setAttribute('disabled','')
    // The classList property returns the CSS classnames of an element.
      p.classList.add('button');
      p.innerHTML = `<button id="newGame">Start New Game</button>`;
      startOver.appendChild(p);
      playGame = false;
      newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 10+ 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;

    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    })

}
