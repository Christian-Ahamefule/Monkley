const buttonFp = document.querySelector("#forgotPassword");
const buttonRp = document.querySelector("#resetPassword");
const buttonSfpf = document.querySelector("#submitFPF");
const buttonSrpf = document.querySelector("#submitRPF");
const instructionText = document.querySelector(".instructionText");
const instructionTextContainer = document.querySelector("#instructionText");
const fpContainer = document.querySelector("#forgotPasswordContainer");
const forgotPf = document.querySelector("#forgotPasswordForm");
const rpContainer = document.querySelector("#resetPasswordContainer");
const username = document.querySelector("#userName");
const newPasswordLabel = document.querySelector("#newPasswordLabel");
const oldPassword = document.querySelector("#oldPassword");
const newPassword = document.querySelector("#newPassword");
const showPassword = document.querySelector("#showPassword");
const info = document.querySelector(".info");

const locations = [
    {
        style1:"none",
        style2:"block",
        style3:"rgb(229, 180, 3)",
        style4:"black"
    },
    {
        style1:"block",
        style2:"none",
        style3:"black",
        style4:"rgb(229, 180, 3)"
    }
]

 const emails = [
    "chrisaham96@gmail.com",
    "eonwudiwe@gmail.com",
    "ahamefulemicheal@gmail.com",
    "igberi.cyril@gmail.com"
]

// initializing buttons
buttonFp.onclick = forgot;
buttonRp.onclick = reset;
showPassword.onclick = show;
buttonSfpf.onclick = submitForgot;
buttonSrpf.onclick = submitReset;
username.onclick = hidePlaceholder;
newPassword.onclick = reset2;

function update(locations){
    rpContainer.style.display = locations.style1;
    fpContainer.style.display = locations.style2;
    buttonFp.style.color = locations.style3;
    buttonRp.style.color = locations.style4;
}

function forgot(){
    update(locations[0]);
}

function reset(){
    update(locations[1]);
}

function hidePlaceholder(){
    if (username.value.length > 0){
        username.placeholder = "";
    } else {
        username.placeholder = "Enter email";
    }
}

function submitForgot(){
    if (emails.includes(username.value)){
        buttonSfpf.style.display = "none";
        username.style.display = "none";
        instructionText.innerHTML = "A link has been sent to your email!";
        instructionText.style.color = "green";
    } else {
        instructionText.innerHTML = "Could not find an account registered with this email";
        instructionText.style.color = "red";
    }
}

function show() {
    if (oldPassword.type === "password" && newPassword.type === "password"){
        oldPassword.type = "text";
        newPassword.type = "text";
    } else {
        oldPassword.type = "password";
        newPassword.type = "password";
    }
}

function submitReset (){
    if (oldPassword.value === newPassword.value){
        newPasswordLabel.style.color = "red";
        newPassword.value = '';
    } else {
        window.alert("Password Reset !");
        oldPassword.value = "";
        newPassword.value = "";
    }
}

function reset2 (){
    newPasswordLabel.style.color = "black";
}