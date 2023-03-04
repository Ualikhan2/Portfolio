// Получаем ссылки на кнопку, модальное окно и кнопку закрытия
var btn = document.querySelector('.heart');
var modal = document.getElementById('modal');
var span = document.querySelector('.close');

// Обработчик клика по кнопке
btn.onclick = function() {
  // Отменяем переход по ссылке
  event.preventDefault();
  // Отображаем модальное окно
  modal.style.display = 'block';
}

// Обработчик клика по кнопке закрытия
span.onclick = function() {
  modal.style.display = 'none';
}

// Обработчик клика по области вне модального окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
