'use strict';

const success = (data) => {
  if (data) {console.log(data); }
};

const getGameSuccess = (data) => {
  $('.message-player').show();
  $('.message-player').text('You\'ve played ' + data.games.length + ' times!');

  // if (data) {
  //   console.log(data);
  // }
};

const showGamesSuccess = (data) => {
  $('.message-player').show();
  $('.message-player').text('You\'ve played ' + data.games.length + ' times!');

  // if (data) {
  //   console.log(data);
  // }
};

const failure = (error) => {
  console.error(error);
  $('.message-player').text('There was an error. Please try again.');
};

module.exports = {
  showGamesSuccess,
  getGameSuccess,
  failure,
  success,
};

// const createSuccess = function () {
//   if (gameStore.game !== {}) {
//     board.endGame();
//   }
//   $('#gameid').text(gameStore.game.id);
//   $('#gameboard').css("border-color", "black");
//   board.boardInit();
// };

// const showGamesSuccess = function (data) {
//   $('#getwins').text(board.getUserWins(data));
//   $('.message-player').text(store.user.email + ' has ' + board.getUserWins(data) + ' wins');
// };

// const showGameSuccess = function (data) {
//   $('#gameid').text(data.game.id + '');
//   $('#gamecells').text(data.game.cells);
//   $('#player').text(data.game.player_x.email);
//   $('#over').text(data.game.over);
// };

// const unfinishedSuccess = function (data) {
//   let games = board.getUnfinishedGamesIds(data);
//   if (games.length > 0) {
//     $('#unfinished').text(games);
//   } else {
//     $('.message-player').text('No unfinished games!');
//   }
// };

// const failure = () => {
//   $('.message-player').text('There was an error. Please try again.');
// };

// const showFailure = () => {
//   $('.message-player').text('Please enter a valid game!');
// };

// module.exports = {
//   createSuccess,
//   showGamesSuccess,
//   showGameSuccess,
//   unfinishedSuccess,
//   failure,
//   showFailure,
// };
