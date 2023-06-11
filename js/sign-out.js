document.getElementById('sign-out-btn').addEventListener('click', function() {
    // Clear the user's session or delete the authentication cookie
    sessionStorage.clear();
    // Redirect the user to the login page
    window.location.href = 'login_page.html';
  });