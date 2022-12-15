const formDOM = document.querySelector('.form');
const usernameDOM = document.querySelector('.username-input');
const passwordDOM = document.querySelector('.password-input');
const formAlertDOM = document.querySelector('.form-alert');
const dataBtnDOM = document.querySelector('#data');
const resultDOM = document.querySelector('.result');

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = usernameDOM.value;
  const password = passwordDOM.value;

  try {
    const response = await axios.post('/api/v1/login', { username, password });
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'Login Successful';
    formAlertDOM.classList.add('text-success');

    usernameDOM.value = '';
    passwordDOM.value = '';

    console.log(response);
  } catch (error) {
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = error.response.data.msg;
  }

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
  }, 2000);
});

dataBtnDOM.addEventListener('click', async () => {
  try {
    const { data } = await axios.get('/api/v1/dashboard');
    resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`;
  } catch (error) {
    console.log(error);
  }
});
