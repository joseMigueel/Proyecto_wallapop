import { REGEXP } from "../utilidades/constants.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm) {

    // Crear contenedor de errores
    const errorContainer = document.createElement("div");
    errorContainer.id = "error-container";
    errorContainer.style.color = "red";
    loginForm.appendChild(errorContainer);

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const userNameElement = loginForm.querySelector("#name-user");
        const passwordElement = loginForm.querySelector("#password");

        const userName = userNameElement.value.trim();
        const password = passwordElement.value.trim();

        const errors = [];
        const userRegExp = new RegExp(REGEXP.user);

        if (!userRegExp.test(userName)) {
            errors.push('El nombre de usuario o correo electrónico no es válido');
        }
        showErrors(errors, errorContainer);

        if (errors.length === 0) {
            try {
                const token = await loginUser(userName, password);
                localStorage.setItem("jwt", token);
                window.location.href = "/";
            } catch (error) {
                showErrors([error.message], errorContainer);
            }
        }
    });
}

function showErrors(errors, errorContainer) {
    errorContainer.innerHTML = "";
    if (errors.length > 0) {
        const errorList = document.createElement("ul");
        errors.forEach((error) => {
            const li = document.createElement("li");
            li.textContent = error;
            errorList.appendChild(li);
        });
        errorContainer.appendChild(errorList);
    }
}
