const taskDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');

// Load tasks from api /api/v1/tasks
const showAllTasks = async () => {
  loadingDOM.style.visibility = 'visible';
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks');

    if (tasks.length < 1) {
      taskDOM.innerHTML = `<h5 class="empty-list">No Tasks in your list</h5>`;
      loadingDOM.style.visibility = 'hidden';
      return;
    }

    const allTasks = tasks.map((task) => {
      const { _id: taskID, completed, name } = task;
      return `<div class="single-task ${completed && 'task-completed'}">
          <h5>
            <span><i class="far fa-check-circle"></i></span>${name}
          </h5>
          <div class="task-links">
            <!-- edit link -->
            <a href="./task.html?id=${taskID}" class="edit-link"><i class="fas fa-edit"></i></a>
            <!-- delete button -->
            <button type="button" class="delete-btn" data-id="${taskID}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>`;
    });

    taskDOM.innerHTML = allTasks.join('');
  } catch (error) {
    taskDOM.innerHTML = `<h5 class="empty-list">There was an error, please try later...</h5>`;
  }
  loadingDOM.style.visibility = 'hidden';
};

showAllTasks();

// delete task /api/v1/tasks/:id
taskDOM.addEventListener('click', async (e) => {
  const el = e.target;
  if (el.parentElement.classList.contains('delete-btn')) {
    const id = el.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showAllTasks();
    } catch (error) {
      console.log(error);
    }
  }
});

// form submission
formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = taskInputDOM.value;

  try {
    await axios.post('/api/v1/tasks', { name });
    showAllTasks();
    taskInputDOM.value = '';
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = `success, task added`;
    formAlertDOM.classList.add('text-success');
  } catch (error) {
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = `error, please try again`;
  }

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
    formAlertDOM.classList.remove('text-success');
  }, 3000);
});
