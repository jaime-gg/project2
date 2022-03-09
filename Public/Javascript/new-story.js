async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="story-title"]').value;
    const body = document.querySelector('input[name="story-body"]').value;
  
    const response = await fetch(`/api/stories`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.new-story-form').addEventListener('submit', newFormHandler);