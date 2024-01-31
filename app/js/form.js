document.addEventListener("DOMContentLoaded", () => {
  $('#send-form').click(() => {
    $.ajax({
      url: '/contact-form',
      type: 'POST',
      data: {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        organization: document.getElementById('organization').value,
        message: document.getElementById('message').value,
      },
      success: (data) => {
        alert('Email sent successfully.');
      },
      error: (xhr, ajaxOptions, thrownError) => {
        if (xhr.status === 400) {
          alert(xhr.responseJSON.message);
        }
        else {
          alert('Unexpected error.');
        }
      }
    }); 
  });
});