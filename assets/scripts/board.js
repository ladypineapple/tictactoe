'use strict';

const player = function (name, index) {
  this.name = name;
  this.playerNumber = index;
  if (index === 1) {
    this.marker= 'X';
  } else {
    this.marker = 'O';
  }
};

let board = ['','','',
            '','','',
            '','',''];
