async function editAboutMeHandler(event) {
    event.preventDefault();
  
    const about_me = document.querySelector('input[name="about-me"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        about_me
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/profile/');
    } else {
      alert(response.statusText);
    }
}
  
  document.querySelector('.edit-about-me-form').addEventListener('submit', editAboutMeHandler);