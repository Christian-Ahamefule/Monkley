const eye = document.querySelector('#eye');
const username = document.querySelector("#userName");
const password = document.querySelector('#password');
const loginButton = document.querySelector("#loginButton");
const info = document.querySelector("#info")

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


// initializing buttons
eye.onclick = show;
loginButton.onclick = check;
username.onclick = reset;
password.onclick = reset;

function show(){
    if(password.type === "password"){
        password.type = "type";
    } else {
        password.type = "password";
    }
    this.classList.toggle('fa-eye-slash');
}

function check (){
    const user = users.find(user => user.name === username.value);

    if (user && user.password === password.value){
        window.alert("Welcome "+ username.value +"!");
    } else {
        username.value = "";
        password.value = '';
        info.style.display = "block";
        info.innerText = "Invalid username or password";
    }
}

function reset (){
    info.style.display = 'block' ? "none" : "block";
}