import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const emailInput = feedbackForm.querySelector('input[name="email"]');

const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

emailInput.addEventListener('input', throttle(saveFormState, 500));
messageTextarea.addEventListener('input', throttle(saveFormState, 500));

function loadFormState() {
  const storedState = localStorage.getItem(STORAGE_KEY);
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
}

loadFormState();

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formState);
  emailInput.value = ``;
  messageTextarea.value = ``;

  localStorage.removeItem(STORAGE_KEY);
});
