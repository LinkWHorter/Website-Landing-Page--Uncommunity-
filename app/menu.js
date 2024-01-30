document.addEventListener("DOMContentLoaded", function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var contsDiv1 = document.querySelector('.logo');
    var contsDiv2 = document.querySelector('.menu');
    contsDiv2.classList.add('closed');
    // Добавляем обработчик события клика
    contsDiv1.addEventListener('click', function() {
        var hasClass = contsDiv2.classList.contains('opened');
      // Используем toggle, чтобы добавить или удалить класс "visible"
      if (screenWidth < 768 && hasClass) {
        contsDiv2.classList.remove('opened');
        contsDiv2.classList.add('closed');
      }
      else {
        contsDiv2.classList.remove('closed');
        contsDiv2.classList.add('opened');
      }
    });
    if (screenWidth > 768) {
        contsDiv2.classList.remove('closed');
        contsDiv2.classList.add('opened');
      }
  });