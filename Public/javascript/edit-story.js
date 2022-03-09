async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="story-title"]').value.trim();
    const body = document.querySelector('input[name="story-body"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/stories/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        body
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
  
  document.querySelector('.edit-story-form').addEventListener('submit', editFormHandler);