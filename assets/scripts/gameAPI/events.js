'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const board = require('../board.js');
const api = require('./api');
const ui = require('./ui');
const store = require('./store');

const onShowGames = function (event) {
  event.preventDefault();

  api.getAllGames()
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onCreateGame = function (event) {
  event.preventDefault();

  api.createGame()
    .then((response) => {
      console.log(response.game);
      store.game = response.game;
      console.log(store.game);
      return store;
    })
    .then(board.clearBoard(event))
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onGetGame = function (event) {
  event.preventDefault();

  api.getGame(store.game.id)
    .then(ui.success)
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
  $('#get-game').on('click', onGetGame);
  $('#reset-button').on('click', onCreateGame);
  $('#show-games').on('click', onShowGames);
};

module.exports = {
  addHandlers,
};
