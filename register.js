import { registerController }  from "./register/register-controller"

document.addEventListener("DOMContentLoaded", ()=> {
    const registerForm = document.querySelector('form')
    registerController(registerForm)
    
})