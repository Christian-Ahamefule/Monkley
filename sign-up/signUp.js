const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signupButton = document.querySelector("#submit");
const googleButton = document.querySelector(".google");
const facebookButton = document.querySelector(".facebook");
const icon = document.querySelector("#icon");

icon.onclick = show;

function show() {
    if (password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
    this.classList.toggle('fa-eye-slash');
}


