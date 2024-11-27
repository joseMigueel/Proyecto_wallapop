import { registerController }  from "./register/register-controller.js"

document.addEventListener("DOMContentLoaded", ()=> {
    const registerForm = document.querySelector('form')
    registerController(registerForm)
    
})