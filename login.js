import { loginController } from "./loggear/login-controller"

document.addEventListener("DOMContentLoaded", ()=> {
    const loginForm = document.querySelector("form")
    loginController(loginForm)
})