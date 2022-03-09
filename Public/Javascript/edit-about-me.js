async function editAboutMeHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="story-title"]').value.trim();
    const body = document.querySelector('input[name="story-body"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/stories/${id}`, {
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