let email = document.querySelector("#email");
let name = document.querySelector('#name')
let pass = document.querySelector("#password")
let gender = document.querySelector(".gender")
let btn = document.querySelector('#btn')


btn.addEventListener('click', () => {
    if(email.value.trim() === '' || pass.value.trim() === '' || name.value.trim() === '') {
        alert('Please fill all input fields');
    } else {
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',pass.value)
    }
});
