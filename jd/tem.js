function toggleTheme() {
    var body = document.body;
    var button = document.querySelector('button');
    
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } 
    else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }

  
// Получаем ссылки на элементы переключателя и на страницу
const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
const body = document.body;

// Обработчик изменения темы
function toggleTheme() {
  if (toggleSwitch.checked) {
    // Если переключатель включен, применяем тему "темная"
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    // Если переключатель выключен, применяем тему "светлая"
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }    
}

// Получаем сохраненную тему из localStorage и применяем ее
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  // Если сохраненная тема "темная", включаем переключатель
  if (savedTheme === 'dark') {
    toggleSwitch.checked = true;
  }
  // Применяем сохраненную тему
  toggleTheme();
}

// Устанавливаем обработчик изменения темы
toggleSwitch.addEventListener('change', toggleTheme);