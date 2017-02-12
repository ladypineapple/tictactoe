'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const board = require('../board.js');
const api = require('./api');
const ui = require('./ui');
const store = require('./store');

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then((response) => {
      console.log(response.game);
      store.game = response.game;
      $('.gameid').text(store.game.id + '');
      console.log(store.game);
      return store;
    })
    .then(board.clearBoard(event))
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onShowGames = function (event) {
  event.preventDefault();
  api.getAllGames()
    .then(ui.showGamesSuccess)
    .catch(ui.failure)
    ;
};

const onGetGame = function (event) {
  event.preventDefault();
  let id = parseInt($('.gameid').val());
  api.getGame(id)
  .then(ui.getGameSuccess)
  .catch(ui.failure)
  ;
};

// const onSignIn = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.signIn(data)
//   .then((response) => {
//     store.user = response.user;
//     return store;
//   })
//   .then(ui.signInSuccess)
//
//   // .catch(ui.failure)
//   ;
// };
//
// const onChangePassword = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//     .then(ui.success)
//     .catch(ui.failure)
//     ;
// };
//
// const onSignOut = function (event) {
//   event.preventDefault();
//   api.signOut()
//     .then(() => {
//       delete store.user;
//       return store;
//     })
//     .then(ui.success)
//     .catch(ui.failure)
//     ;
// };

const addHandlers = () => {
  $('#reset-button').on('click', onCreateGame);
  $('#show-games').on('click', onShowGames);
  $('#get-game').on('submit', onGetGame);
};

module.exports = {
  addHandlers,
};
