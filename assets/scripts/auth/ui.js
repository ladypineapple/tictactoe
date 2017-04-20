'use strict';

const success = (data) => {
  if (data) { console.log(data); }
};

const signUpSuccess = () => {
  $('#sign-up').hide().val('');
  $('.message-player').text('Success. Please Sign in to play.');

  // if (data) {
  //   console.log(data);
  // }
};

const signInSuccess = () => {
  $('#sign-up').val('');
  $('#sign-in').val('');
  $('#up').hide();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#reset-button').show();
  $('#show-games').show();
  $('.game-board-container').show();
  $('#game-buttons').show();
  $('.game-box').on('click');
  $('.message-player').text('Success. Start Game to play.');

  // $('#board').show();
  // if (data) {
  //   console.log(data);
  // }
};

const changePasswordSuccess = () => {
    $('#change-password').val('');
    $('.message-player').text('Your password has been changed.');
  };

const signOutSuccess = () => {
    $('#sign-out').hide();
    $('#up').show();
    $('#game-board-container').val('');
    $('.game-box').val('');
    $('#change-password').hide();
    $('#reset-button').hide();
    $('#show-games').hide();
    $('.game-board-container').hide();
    $('#game-buttons').hide();
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-up').val('');
    $('#sign-in').val('');
    $('.game-box').off('click');
    $('.player-turn').text('');
    $('.message-player').text('You are signed out.');

    // if (data) {
    //   console.log(data);
    // }
  };

const failure = (error) => {
  console.error(error);
  $('.message-player').text('There was an error. Please try again.');
};

module.exports = {
  changePasswordSuccess,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  failure,
  success,
};
