import { REGEXP } from "../utilidades/constants.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm) {

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userNameElement = loginForm.querySelector("#name-user")
        const passwordElement = loginForm.querySelector("#password")

        const userName = userNameElement.value;
        const password = passwordElement.value;


        const userRegExp = new RegExp(REGEXP.user);
        if (!userRegExp.test(userName)){
            alert('El formato que utiliza esta incorrecto')
        } else {
            manageUserRegister(userName, password) 
        }
    })

}

async function manageUserRegister(userName, password) {
    const token = await loginUser(userName, password);

    localStorage.setItem("jwt", token);
    window.location.href = "/"
}