async function handleFormSubmit(event) {
    event.preventDefault()

    const form = document.querySelector('#registerForm');
    const usernameInput = form.querySelector('#username');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const passwordRepeatInput = form.querySelector('#password-repeat');

        if (passwordInput.value !== passwordRepeatInput.value) {
        alert("Passwords do not match!");
        return;
        }

    const data = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log(data)

    fetch('http://127.0.0.1:8000/registration', options)
        .then(response => response.json())
        .then(data => {
            window.location.href = 'login_page.html';
            console.log("Success")
        })
        .catch(error => console.error(error));
}
const applicantForm = document.getElementById('registerForm')
applicantForm.addEventListener('submit', handleFormSubmit)