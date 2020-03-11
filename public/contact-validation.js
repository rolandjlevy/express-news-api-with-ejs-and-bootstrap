const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit');
const contactForm = document.querySelector('.contactForm');

contactForm.addEventListener('keyup', (e) => {
  submitButton.disabled = nameInput.value && emailInput.value ? false : true;
});

