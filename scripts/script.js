'use strict';
const computerScore = document.getElementById
    ('computer-score');
const userScore = document.getElementById
    ('user-score');
let cScore =0;
let pScore =0;
let result1='';

const gameStartContainer= document.getElementById
    ('game-start');
const gameResultContainer=document.querySelector
('.game-result');
const hands= document.querySelector('.hands');
const btnGameStart = document.getElementById('btn-game-start');
const computerChoice= document.getElementById('computer-choice');
const userChoice= document.getElementById('user-choice');
const result= document.getElementById('result');


//Game Start function
const gameStart =function(){
    computerScore.innerText =cScore;
    userScore.innerText=pScore;
gameResultContainer.classList.remove('hidden');
gameStartContainer.classList.add('hidden');
hands.classList.remove('hidden');
};

//game logic
const gameLogic =function(userSelected , computerSelected){
    if(userSelected === computerSelected){
        result1 ='DRAW';
        updateDOM(userSelected,computerSelected,result1);
        return;
    }
    if(userSelected === 'rock'){
        if(computerSelected === 'paper'){
            result1='YOU LOSE';
            cScore++;
            updateDOM(userSelected,computerSelected,result1);
            return;
        }
        else{
            result1='YOU WON';
            pScore++;
            updateDOM(userSelected,computerSelected,result1);
            return;
        }
    }

    if(userSelected === 'paper'){
        if(computerSelected === 'scissors'){
            result1='YOU LOSE';
            cScore++;
            updateDOM(userSelected,computerSelected,result1);
            return;
        }
        else{
            result1='YOU WON';
            pScore++;
            updateDOM(userSelected,computerSelected,result1);
            return;
        }
    }

    if(userSelected === 'scissors'){
        if(computerSelected === 'rock'){
            result1='YOU LOSE';
            cScore++;
            updateDOM(userSelected,computerSelected,result1);
            return;
        }
        else{
           result1='YOU WON';
            pScore++;
            updateDOM(userSelected,computerSelected,result1);
            return;
        }
    }

};

//upadateDOM
const updateDOM =function(userSelected,computerSelected,result1){
        computerScore.innerText=cScore;
        userScore.innerText=pScore;
        computerChoice.innerHTML=`Computer Choose <strong>${computerSelected.toUpperCase()}</strong>`;
        userChoice.innerHTML=`You Choose <strong>${userSelected.toUpperCase()}</strong>`;
        result.innerText=result1
};

const check= function(input){
    const userSelected =input;
    const choices=['rock','paper','scissors'];
    const num= Math.trunc(Math.random()*3);
    const computerSelected =choices[num];
    //calling game logic
    gameLogic(userSelected,computerSelected);

};


//Event Listener
btnGameStart.addEventListener('click',gameStart);

//calling functions

