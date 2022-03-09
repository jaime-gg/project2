async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="story-title"]').value;
  const body = document.querySelector('input[name="story-body"]').value;
  const cover_color = document.querySelector('coverColor').value;
  const title_color = document.querySelector('textColor').value;
  const font_size = document.querySelector('textSlider').value;
  const font = document.querySelector('fontMenu').value;
  const border_color = document.querySelector('borderColor').value;
  const border_width = document.querySelector('borderWSlider').value;

  const response = await fetch(`/api/stories`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      cover_color,
      title_color,
      font_size,
      font,
      border_color,
      border_width
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-story-form')
  .addEventListener('submit', newFormHandler);
