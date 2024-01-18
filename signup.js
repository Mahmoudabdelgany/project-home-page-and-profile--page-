const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const signupButton = document.getElementById("signup-btn");

function validatePassword(password) {
    const isValidLength = password.length >= 8;
    const hasLetters = password.search("[a-zA-Z]+") >= 0;
    const hasNumbers = password.search("[0-9]+") >= 0;

    return isValidLength && hasLetters && hasNumbers;
}

signupButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (!usernameInput.value) {
        alert("Username cannot be empty");
        return;
    }

    if (usernameInput.value === "team") {
        alert("Username already exists.. Try another one !");
        return;
    }

    if (!validatePassword(passwordInput.value)) {
        alert("Password must be at least 8 characters wide and contains at least one letter and one number");
        return;
    }

    if (passwordInput.value !== passwordConfirmInput.value) {
        alert("Passwords must match");
        return;
    }

    window.alert("You are now registered. Please login with your new credentials.")
    location.assign("login.html");
});