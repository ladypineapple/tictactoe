'use strict';

let playerX = 1;
let playerO = 2;
let currentPlayer = playerX;
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let tempSymbol;
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

//Function to assign marker based on playerx or player0
const symbolValue = function (player, divClassNum) {
  if (player === playerX) {
  gameBoard[divClassNum] = 'x';
  tempSymbol = 'x';
    } else {
    gameBoard[divClassNum] = 'o';
    tempSymbol = 'o';
    }
};

//determines if space is available
const issquareEmpty = function (squareNum) {
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

//Arrays Equal to test for is Winner Function
function arraysEqual(arr1, arr2) {
if (arr1.length !== arr2.length) {
return false;
}
for (let i = arr1.length; i--;) {
if (arr1[i] !== arr2[i]) {
return false;
}
}

return true;
}

//Determines if anyone won after a turn
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
let winCompOneX = arraysEqual(tempArrayX, winOne);
let winCompTwoX = arraysEqual(tempArrayX, winTwo);
let winCompThreeX = arraysEqual(tempArrayX, winThree);
let winCompFourX = arraysEqual(tempArrayX, winFour);
let winCompFiveX = arraysEqual(tempArrayX, winFive);
let winCompSixX = arraysEqual(tempArrayX, winSix);
let winCompSevenX = arraysEqual(tempArrayX, winSeven);
let winCompEightX = arraysEqual(tempArrayX, winEight);

let winCompOneY = arraysEqual(tempArrayY, winOne);
let winCompTwoY = arraysEqual(tempArrayY, winTwo);
let winCompThreeY = arraysEqual(tempArrayY, winThree);
let winCompFourY = arraysEqual(tempArrayY, winFour);
let winCompFiveY = arraysEqual(tempArrayY, winFive);
let winCompSixY = arraysEqual(tempArrayY, winSix);
let winCompSevenY = arraysEqual(tempArrayY, winSeven);
let winCompEightY = arraysEqual(tempArrayY, winEight);

console.log(tempArrayX);

if (winCompOneX || winCompTwoX || winCompThreeX || winCompFourX || winCompFiveX || winCompSixX || winCompSevenX || winCompEightX || winCompOneY || winCompTwoY || winCompThreeY || winCompFourY || winCompFiveY || winCompSixY || winCompSevenY || winCompEightY) {

return true;
}
};

//Tests to see if the game is over (using isBoardFilled and isWinner)
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
  tempSymbol = "";
  currentPlayTurn = "";
console.log('board is clear js');
messageText();
};

//*************jQuery//
//Onload Functions for jQuery
$(() => {

//console log index number
$(".game-board-container div").on( "click", function() {
let divClass = $( this ).attr("class");
let divClassNum = parseInt(divClass);
console.log(divClassNum);
if (issquareEmpty( divClassNum ) === true) {
$(".player-message").text("");
symbolValue(currentPlayer, divClassNum);
$( this ).text( tempSymbol );
if (gameOver(gameBoard) === true) {

    $(".player-turn").text("");
    $(".player-message").text("Game Over");
  } else {
    changePlayer();
    currentPlayTurn = messageText(currentPlayer);
    $(".player-turn").text(currentPlayTurn);
  }
} else {
  $(".player-message").text("This square is taken!  Pick again.");
}

console.log(gameBoard);
});
});

$("#reset-button").on("click", function() {
  console.log('reset completed');
  clearBoard();
  $(".game-box").text('');
});
