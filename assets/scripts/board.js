'use strict';

let playerX = 1;
let playerO = 2;
let currentPlayer = playerX;
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let playSymbol;
let currentPlayTurn;
// Message for who's turn it is
const messageText = function(currentPlayer) {
return "It's your turn, Player " + currentPlayer;
};

//Switch to the next player after each turn
const changePlayer = function () {
if ( currentPlayer === playerX ) {
currentPlayer = playerO;
} else {
currentPlayer = playerX;
}
};

//Function to assign x or o to square depending on player#
const symbolValue = function (player, divClassNum) {
if (player === playerX) {
gameBoard[divClassNum] = 'x';
playSymbol = 'x';
} else {
gameBoard[divClassNum] = 'o';
playSymbol = 'o';
}
};

//determines if square was already clicked
const isSpaceEmpty = function (squareNum) {
if (gameBoard[squareNum] === "") {
return true;
} else {
return false;
}
};

//states whether the board is filled
const isBoardFilled = function(arr) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] === "") {
return false;
}
}
return true;
};

//Arrays Equal to test for isWinner Function
function arraysEqual(array1, array2) {
if (array1.length !== array2.length) {
return false;
}
for (let i = array1.length; i--;) {
if (array1[i] !== array2[i]) {
return false;
}
}

return true;
}

//Do we have a winner?
const isWinner = function(arr) {
let tempArrayX = [];
let tempArrayY = [];
let winOne = [0, 1, 2];
let winTwo = [2, 5, 8];
let winThree = [6, 7, 8];
let winFour = [0, 3, 6];
let winFive = [0, 4, 8];
let winSix = [2, 4, 6];
let winSeven = [1, 4, 7];
let winEight = [3, 4, 5];

for (let i = 0; i < arr.length; i++) {
if (arr[i] === "x") {
tempArrayX.push(i);
} else if (arr[i] === "o") {
tempArrayY.push(i);
}
}
let winComboOneX = arraysEqual(tempArrayX, winOne);
let winComboTwoX = arraysEqual(tempArrayX, winTwo);
let winComboThreeX = arraysEqual(tempArrayX, winThree);
let winComboFourX = arraysEqual(tempArrayX, winFour);
let winComboFiveX = arraysEqual(tempArrayX, winFive);
let winComboSixX = arraysEqual(tempArrayX, winSix);
let winComboSevenX = arraysEqual(tempArrayX, winSeven);
let winComboEightX = arraysEqual(tempArrayX, winEight);

let winComboOneY = arraysEqual(tempArrayY, winOne);
let winComboTwoY = arraysEqual(tempArrayY, winTwo);
let winComboThreeY = arraysEqual(tempArrayY, winThree);
let winComboFourY = arraysEqual(tempArrayY, winFour);
let winComboFiveY = arraysEqual(tempArrayY, winFive);
let winComboSixY = arraysEqual(tempArrayY, winSix);
let winComboSevenY = arraysEqual(tempArrayY, winSeven);
let winComboEightY = arraysEqual(tempArrayY, winEight);

console.log(tempArrayX);

if (winComboOneX || winComboTwoX || winComboThreeX || winComboFourX || winComboFiveX || winComboSixX || winComboSevenX || winComboEightX || winComboOneY || winComboTwoY || winComboThreeY || winComboFourY || winComboFiveY || winComboSixY || winComboSevenY || winComboEightY) {

return true;
}
};

//Test for a winner using isBoardFilled and isWinner
const gameOver = function (arr) {
  let isBF = isBoardFilled(arr);
  let isW = isWinner(arr);
  if (isBF || isW) {
return true;
}
};

//Function nested in jQuery to start over
const clearBoard = function() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = playerX;
  playSymbol = "";
  currentPlayTurn = "";
console.log('board is clear js');
// messageText(currentPlayer);
currentPlayTurn = messageText(currentPlayer);
  $(".player-turn").text(currentPlayTurn);
  $(".message-player").text('');
  $(".game-box").text('');
};

//jQuery//
//Onload Functions for jQuery
$(() => {

//console log index number
$(".game-board-container div").on( "click", function() {
  let divClass = $( this ).attr("class");
  let divClassNum = parseInt(divClass);
  console.log(divClassNum);

if (isSpaceEmpty( divClassNum ) === true) {
  $(".message-player").text("");
  symbolValue(currentPlayer, divClassNum);
  $( this ).text( playSymbol );

if (gameOver(gameBoard) === true) {
    $(".player-turn").text("");
    $(".message-player").text("Game Over");
    } else {
    changePlayer();
    currentPlayTurn = messageText(currentPlayer);
    $(".player-turn").text(currentPlayTurn);
  }
} else {
  $(".message-player").text("This square is taken! Pick again.");
}

console.log(gameBoard);
});
});
$("#reset-button").on("click", function() {
  console.log('reset completed');
  clearBoard();
  //
});
