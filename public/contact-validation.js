const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit');
const contactForm = document.querySelector('.contactForm');

contactForm.addEventListener('keyup', (e) => {
  const valid = nameInput.value && emailInput.value ? true : false;
  submitButton.disabled = !valid;
  submitButton.value = valid ? 'Submit' : 'Enter name and email';
});

