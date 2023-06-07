"use strict";

///////////////////////////////////////
let secretNumber;
function secretNumberF() {
  secretNumber = Math.ceil(Math.random() * 20); //Рандомное число
  console.log(secretNumber); // вывод рандомного числа
  return secretNumber;
}

let question = document.querySelector(".number");

secretNumberF(); //запуск функции
function resetGame() {
  //запуск "Снова"
  secretNumberF();
  if (20 - score.innerHTML < recordNumber && gameWon == true) {
    recordNumber = 21 - score.innerHTML;
    numberOffAttString.innerHTML = recordNumber;
    numberOfAtt = recordNumber;
  }
  score.innerHTML = 20;
  gameWon = false;
  question.innerHTML = "?";
  buttonCheck.style.display = "block";
}
let gameWon = false;
let recordNumber = 20;

let score = document.querySelector(".score"); //кол-во попыток

let messageAlert = document.querySelector(".message"); // Текст над полем ввода

let scoreFirstNumber = 20; // Попытки--
score.innerHTML = scoreFirstNumber;
let numberOfAtt = 0; // счетчик попыток

let buttonCheck = document.querySelector(".check");

let numberOffAttString = document.querySelector(".highscore"); //Число в рекорде

// Функция
function getInputValue() {
  let inputVal = document.querySelector("input").value;
  if (inputVal == secretNumber) {
    messageAlert.innerHTML = "Вы выиграли!";
    gameWon = true;
    buttonCheck.style.display = "none";
    question.innerHTML = secretNumber;
  } else if (inputVal > secretNumber) {
    score.innerHTML--; // -1 в количестве попыток
    console.log(numberOfAtt); // Вывод числа попыток (?)

    messageAlert.innerHTML = "Загаданное число меньше вашего";
  } else {
    score.innerHTML--; //-1 в количестве попыток
    numberOfAtt++; // +1 в рекорде
    console.log(numberOfAtt); // Вывод числа попыток (?)
    messageAlert.innerHTML = "Загаданное число больше вашего";
  }
}
//Функция

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/
