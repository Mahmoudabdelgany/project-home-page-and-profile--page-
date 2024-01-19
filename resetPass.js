function openForm() {
    let user = "team";
    let Iuser = document.getElementById("UserName").value;
    if (user == Iuser) {
        document.getElementById("myForm").style.display = "block";
    }
    else {
        alert("you don't have an account sign up first")
    }
}

document.getElementById("goToLogin").addEventListener("click", (e) => {
    e.preventDefault();
    let newPass = document.getElementById("newPass").value;
    let confirmPass = document.getElementById("confirmPass").value;
    if (newPass === "" && confirmPass === "") {
        window.alert("Please type a new password !");
    } else {
        if (newPass != confirmPass) {
            window.alert("Your password is not matching !");
        } else {
            window.alert("Password Changed successfully !");
            location.assign("login.html");
        }
    }
});