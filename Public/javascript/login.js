async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/profile/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const title = "First Story"
    const body = "First Story body"
    const cover_color = '#FFFFFF';
    const title_color = '#F2F2F2';
    const font_size = 15;
    const font = 'Barrio';
    const border_color = 55;
    const border_width = '#F3F3F3';
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      const response2 = await fetch('/api/stories', {
        method: 'post',
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
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(response2)
  
      if (response.ok && response2.ok) {
        document.location.replace('/profile/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  