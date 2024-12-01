import { REGEXP } from "../utilidades/constants.js"
import { createUser } from "./register-model.js";

export function registerController(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userNameElement = form.querySelector('#name-user');
        const passwordElement = form.querySelector('#password');
        const verifyPasswordElement = form.querySelector('#verify-password');
        
        const userName = userNameElement.value;
        const password = passwordElement.value;
        const verifyPassword = verifyPasswordElement.value;

        const errors = [];

        const userRegExp = new RegExp (REGEXP.user);
        if (!userRegExp.test(userName)){
            errors.push('Nombre del usuario incorrecto')
        }

        if (password !== verifyPassword){
            errors.push('La constraseña no son iguales')
        }

        if (errors.length === 0){
            manageUserRegister(userName, password)
        }
    })
}

async function manageUserRegister(userName, password) {
    
    try{
        await createUser(userName, password)
        window.location.href = "/";
    } catch (error){
        alert(error.message)
    }
}