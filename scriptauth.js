const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function redirectToHome(formType) {
    if (formType === 'signup') {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (name && email && password) {
            window.location.href = 'index.html'; // Redirects if all signup fields are filled
        } else {
            alert("Please fill in all fields for Sign Up.");
        }
    } else if (formType === 'signin') {
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;

        if (email && password) {
            window.location.href = 'index.html'; // Redirects if all signin fields are filled
        } else {
            alert("Please fill in all fields for Sign In.");
        }
    }
}
