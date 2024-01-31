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
  
    function scrollToDiv(destinationId) {
      const destinationDiv = document.getElementById(destinationId);
      if (destinationDiv) {
        const destinationOffset = destinationDiv.offsetTop;
        const scrollOptions = {
          top: destinationOffset,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      }
    }
    
    document.getElementById('link-two').addEventListener('click', function(event) {
      event.preventDefault();
      const destinationId = 'whoweare'; 
      scrollToDiv(destinationId);
    });

    document.getElementById('link-three').addEventListener('click', function(event) {
      event.preventDefault();
      const destinationId = 'bussinessconsult';
      scrollToDiv(destinationId);
    });

    document.getElementById('link-four').addEventListener('click', function(event) {
      event.preventDefault();
      const destinationId = 'techconsult';
      scrollToDiv(destinationId);
    });

    document.getElementById('link-five').addEventListener('click', function(event) {
      event.preventDefault();
      const destinationId = 'career';
      scrollToDiv(destinationId);
    });
  });