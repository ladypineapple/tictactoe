'use strict';

const config = require('../config');
const store = require(`../auth/store`);
const gameStore = require('./store');

const getAllGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const getGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const updateGame = function (id, gamePiece, isOver) {
  console.log(store);
  console.log(id);
  return $.ajax({
    url: config.apiOrigin + '/games/' + gameStore.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      game: {
        cell: {
          index: id,
          value: gamePiece,
        },
        over: isOver,
      },
    },
  });
};

//
// const signOut = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//   });
// };

module.exports = {
  createGame,
  getAllGames,
  updateGame,
  getGame,
};
