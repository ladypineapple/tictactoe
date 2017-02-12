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

const failure = (error) => {
  console.error(error);
  $('.message-player').text('There was an error. Please try again.');
};

module.exports = {
  signUpSuccess,
  failure,
  success,
};
