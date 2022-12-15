const formDOM = document.querySelector('.form');
const usernameDOM = document.querySelector('.username-input');
const passwordDOM = document.querySelector('.password-input');
const formAlertDOM = document.querySelector('.form-alert');
const dataBtnDOM = document.querySelector('#data');
const resultDOM = document.querySelector('.result');
const tokenDOM = document.querySelector('.token');

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  resultDOM.innerHTML = '';

  const username = usernameDOM.value;
  const password = passwordDOM.value;

  try {
    const { data } = await axios.post('/api/v1/login', { username, password });

    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = data.msg;
    formAlertDOM.classList.add('text-success');

    usernameDOM.value = '';
    passwordDOM.value = '';

    localStorage.setItem('token', data.token);
    tokenDOM.textContent = 'token present';
    tokenDOM.classList.add('text-success');
  } catch (error) {
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = error.response.data.msg;
    formAlertDOM.classList.remove('text-success');

    localStorage.removeItem('token');
    tokenDOM.textContent = 'no token present';
    tokenDOM.classList.remove('text-success');
  }

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
  }, 2000);
});

dataBtnDOM.addEventListener('click', async () => {
  const token = localStorage.getItem('token');
  try {
    const { data } = await axios.get('/api/v1/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`;
  } catch (error) {
    localStorage.removeItem('token');
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`;
    tokenDOM.textContent = 'No token present';
    tokenDOM.classList.remove('text-success');
  }
});
