script.js: console.log("Student Task Manager");
const tasks = [];
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-description');
const list = document.getElementById('task-list');
const searchBox = document.getElementById('search-box');

function render(filter = '') {
  list.innerHTML = '';
  tasks
    .filter(t => t.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(t => {
      const li = document.createElement('li');
      li.textContent = t.title + ' - ' + t.description;
      list.appendChild(li);
    });
}

document.getElementById('add-btn').addEventListener('click', () => {
  if (!titleInput.value.trim()) return;
  tasks.push({ title: titleInput.value, description: descInput.value });
  titleInput.value = '';
  descInput.value = '';
  render(searchBox.value);
});

searchBox.addEventListener('input', () => render(searchBox.value));