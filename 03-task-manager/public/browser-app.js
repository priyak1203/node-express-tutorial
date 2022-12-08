const taskDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');

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
            <a href="" class="edit-link"><i class="fas fa-edit"></i></a>
            <!-- delete button -->
            <button type="button" class="delete-btn">
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
