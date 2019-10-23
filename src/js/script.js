document.getElementById('submit').addEventListener('click', () => {

  let text = document.getElementById('email').value;

  const icon = document.getElementById('icon');
  const message = document.getElementById('err_message')
  const input = document.getElementById('email');
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(text)) {
    input.classList.add('error');
    icon.classList.add('error-icon');
    message.classList.add('err');
    console.log(text);
  } else {
    input.classList.remove('error');
    icon.classList.remove('error-icon');
    message.classList.remove('err');

  }
});
