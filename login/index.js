const eye = document.querySelector("#eye");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const info = document.querySelector(".info");
const username = document.querySelector("#username");

const users = [
    {
        name: "chris",
        password: "CHRIS"
    },
    {
        name: "mike",
        password: "MIKE"
    },
    {
        name: "chigor",
        password: "CHIGOR"
    },
    {
        name: "ben",
        password: "GRAFA"
    },
    {
        name: "cyril",
        password: "CYRIL"
    }
]

username.onclick = reset;
password.onclick = reset;

function reset (){
    info.style.display = 'block' ? "none" : "block";
}

function clearField(){
    username.value = '';
    password.value = '';
}

eye.addEventListener("click", function () { 
    password.type = password.type === 'password' ? "text":"password";
    this.classList.toggle ('fa-eye-slash');
});

loginButton.addEventListener("click", function(){
    let user = users.find(user => user.name === username.value);
    if (user && user.password === password.value){
        window.alert("welcome "+username.value+"!");
    } else {
        info.style.display = "block";
        info.innerHTML = 'Invalid username or password';
    }
    clearField()
});