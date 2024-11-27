import { loginController } from "./loggear/login-controller.js"

document.addEventListener("DOMContentLoaded", ()=> {
    const loginForm = document.querySelector("form")
    loginController(loginForm)
})