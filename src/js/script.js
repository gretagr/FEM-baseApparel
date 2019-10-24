document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  let text = document.getElementById('email').value;

  const icon = document.getElementById('icon');
  const message = document.getElementById('err_message')
  const input = document.getElementById('email');
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(text)) {
    input.classList.add('error-border');
    icon.classList.add('error-icon');
    message.innerHTML = "Please provide a valid email"
    if (message.classList.contains('ok')) {
      message.classList.remove('ok');
    }
    message.classList.add('error-msg');
  } else {
    input.classList.remove('error-border');
    icon.classList.remove('error-icon');
    message.innerHTML = "Great! Your email successfully sent."
    if (message.classList.contains('error-msg')) {
      message.classList.remove('error-msg');
    }
    message.classList.add('ok');
  }
});
