document.addEventListener("DOMContentLoaded", function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var contsDiv1 = document.querySelector('.logo');
    var contsDiv2 = document.querySelector('.menu');
    var popupConst = document.querySelector('.pop-up');

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

    document.getElementById('gets-started').addEventListener('click', function(event) {
      event.preventDefault();
      const destinationId = 'lets-works'; // Здесь вы можете определить id динамически
      scrollToDiv(destinationId);
    });

    document.getElementById('tab').addEventListener('click', function() { 
      // Здесь вы можете определить id динамически
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('organization').value = '';
      document.getElementById('message').value = '';
    });

    let messages;

    document.querySelector('.lm1').addEventListener('click', function() {
      messages = "https://www.facebook.com/LutskNationalTechnicalUniversity/?locale=ru_RU";
      document.querySelector('#change-link').textContent = messages;
      document.querySelector('#change-link').setAttribute('href', messages);
    });

    document.querySelector('.lm2').addEventListener('click', function() {
      messages = "https://www.instagram.com/lntu_lutsk/";
      document.querySelector('#change-link').textContent = messages;
      document.querySelector('#change-link').setAttribute('href', messages);
    });

    document.querySelector('.lm3').addEventListener('click', function() {
      messages = "https://twitter.com/RayonLutsk";
      document.querySelector('#change-link').textContent = messages;
      document.querySelector('#change-link').setAttribute('href', messages);
    });

    document.querySelector('.lm4').addEventListener('click', function() {
      messages = "https://twitter.com/RayonLutsk";
      document.querySelector('#change-link').textContent = messages;
      document.querySelector('#change-link').setAttribute('href', messages);
    });

    document.querySelector('.lm4').addEventListener('click', function() {
      messages = "https://ua.linkedin.com/in/кафедра-інженерної-та-комп-ютерної-графіки-лнту-8b4912b6";
      document.querySelector('#change-link').textContent = messages;
      document.querySelector('#change-link').setAttribute('href', messages);
    });
  });


  $(document).ready(function() {
    $(".pop-up").hide();

    $("#link-mask1, #link-mask2, #link-mask3, #link-mask4").click(function() {
      $(".pop-up").hide().fadeIn(3);
      $(".mask").hide().fadeIn(104);
      $(".pop-up-message").hide().fadeIn(205);
    });

    $(".mask").click(function() {
      $(".pop-up-message").fadeOut(205, function() {
        $(".mask").fadeOut(104, function() {
          $(".pop-up").fadeOut(3);
        });
      });
    })
  });