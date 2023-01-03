let title = document.querySelector('#title');
let name = document.getElementById('name');
let signup = document.querySelector('#signup');
let signin = document.querySelector('#signin');

signin.addEventListener("click", (()=> {
    name.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signup.classList.add("disable");
    signin.classList.remove('disable');
}));

signup.addEventListener("click", (()=> {
    name.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signup.classList.remove("disable");
    signin.classList.add('disable');
}));