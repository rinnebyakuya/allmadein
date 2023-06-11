document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();

  // Extract username and password from form fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const body = `username=${username}&password=${password}&submit=Login`;

  // Send POST request to /token/ endpoint
  fetch('http://127.0.0.1:8000/token', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
  })
      .then((response) => response.json())
      .then((data) => {
          if (data.access_token) {
              sessionStorage.setItem('token', data.access_token);
              console.log('Token stored in session storage');
              console.log(data.access_token);
              document.cookie = 'session=active';
              window.location.href = 'profile_page.html';
          } else {
              // Display error message if login is not successful
              window.alert("Invalid username or password");
          }
      })
      .catch((error) => console.error(error));
});