document.addEventListener("DOMContentLoaded", () => {
  $('#send_request').click(() => {
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
        // @TODO Display block with given data.
        alert('Email sent successfully.');
      },
      error: (xhr, ajaxOptions, thrownError) => {
        if (xhr.status === 400) {
          // @TODO Display block with given data.
          alert(thrownError);
        }
        else {
          // @TODO Display something like "Unexpected error".
          alert('Unexpected error.');
        }
      }
    }); 
  });
});