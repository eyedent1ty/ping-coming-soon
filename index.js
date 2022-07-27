'use strict';

const notifyForm = document.querySelector('#notify-form');
const emailInput = document.querySelector('#email-input');
const invalidText = document.querySelector('#invalid');

function isValidEmail(email) {
  if (email.includes('@') && email.includes('.com')) {
    return true;
  }
  return false;
}

notifyForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value;
  if (isValidEmail(email)) {
    emailInput.classList.remove('invalid-email');
    invalidText.classList.add('hide');
  } else {
    emailInput.classList.add('invalid-email');
    invalidText.classList.remove('hide');
  }
});
