async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="story-title"]').value;
  const body = document.querySelector('textarea[name="story-body"]').value;


  ////////////////////////////////////
  var cover_color = $('#cover-inputs').on('click', '#coverColor', function () {
    cover_color = document.querySelector('#coverColor').value;
  });

  var title_color = $('#cover-inputs').on('click', '#textColor', function () {
    title_color = document.querySelector('#textColor').value;
  });

  var font_size = $('#cover-inputs').on('click', '#textSlider', function () {
    font_size = document.querySelector('#textSlider').value;
  });

  var font = $('#cover-inputs').on('click', '#fontMenu', function () {
    font = document.querySelector('#fontMenu').value;

  });

  var border_color = $('#cover-inputs').on(
    'click',
    '#borderColor',
    function () {
      border_color = document.querySelector('#borderColor').value;

    }
  );

  var border_width = $('#cover-inputs').on(
    'click',
    '#borderWSlider',
    function () {
      border_width = document.querySelector('#borderWSlider').value;

    }
  );
//////////////////////////////////////////////


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
      border_width,
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
