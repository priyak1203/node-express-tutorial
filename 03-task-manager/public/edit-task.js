const taskIDDOM = document.querySelector('.task-edit-id');
const taskNameDOM = document.querySelector('.task-edit-name');
const taskCompletedDOM = document.querySelector('.task-edit-completed');
const editBtnDOM = document.querySelector('.task-edit-btn');
const editFormDOM = document.querySelector('.single-task-form');
const formAlertDOM = document.querySelector('.form-alert');

const params = window.location.search;
const id = new URLSearchParams(params).get('id');

// fetch single task /api/v1/tasks/:id
const showTask = async () => {
  try {
    const {
      data: {
        task: { _id: taskID, name, completed },
      },
    } = await axios.get(`/api/v1/tasks/${id}`);

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    taskCompletedDOM.checked = completed;
  } catch (error) {
    console.log(error);
  }
};

showTask();

// form submission
editFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  editBtnDOM.textContent = 'Loading...';

  try {
    const taskName = taskNameDOM.value;
    const taskCompleted = taskCompletedDOM.checked;

    const {
      data: { task },
    } = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    });

    const { _id: taskID, name, completed } = task;
    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    taskCompletedDOM.checked = completed;

    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = `success, edited task`;
    formAlertDOM.classList.add('text-success');
  } catch (error) {
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = `error, please try again`;
  }

  editBtnDOM.textContent = 'edit';

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
    formAlertDOM.classList.remove('text-success');
  }, 3000);
});
