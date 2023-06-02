"use strict";

///////////////////////////////////////

let secretNumber = Math.round(Math.random() * 20);
console.log(secretNumber);

let score = document.querySelector(".score");

let messageAlert = document.querySelector(".message");

let scoreFirstNumber = 20;
score.innerHTML = scoreFirstNumber;
let numberOfAtt = 0;

let numberOffAttString = document.querySelector(".highscore");

function getInputValue() {
  let inputVal = document.querySelector("input").value;
  if (inputVal == secretNumber) {
    alert("Числа равны");
  } else if (inputVal > secretNumber) {
    score.innerHTML--;
    numberOfAtt++;
    numberOffAttString.innerHTML = numberOfAtt;
    console.log(numberOfAtt);

    messageAlert.innerHTML = "Загаданное число меньше вашего";
  } else {
    score.innerHTML--;
    numberOfAtt++;
    numberOffAttString.innerHTML = numberOfAtt;
    console.log(numberOfAtt);
    messageAlert.innerHTML = "Загаданное число больше вашего";
  }
}

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/
