async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/stories/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/profile/');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.delete-story-btn').addEventListener('click', deleteFormHandler);