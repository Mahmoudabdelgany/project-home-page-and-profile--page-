function getValue() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "team" && password === "123") {
        location.assign("home.html");
    }
    else {
        window.alert("Wrong username/password OR reset password");
    }
}