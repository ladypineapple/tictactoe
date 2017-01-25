'use strict';

const player = function (name, index) {
  this.name = name;
  this.playerNumber = index;
  if (index === 1) {
    this.piece = 'X';
  } else {
    this.piece = 'O';
  }
};
