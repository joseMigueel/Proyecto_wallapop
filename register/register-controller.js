import { REGEXP } from "../utilidades/constants.js";
import { createUser } from "./register-model.js";

export function registerController(form) {
    // Crear contenedor de errores
    const errorContainer = document.createElement("div");
    errorContainer.id = "error-container";
    errorContainer.style.color = "red";
    form.appendChild(errorContainer);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const userNameElement = form.querySelector('#name-user');
        const passwordElement = form.querySelector('#password');
        const verifyPasswordElement = form.querySelector('#verify-password');
        
        const userName = userNameElement.value.trim();
        const password = passwordElement.value.trim();
        const verifyPassword = verifyPasswordElement.value.trim();

        const errors = [];
        const userRegExp = new RegExp(REGEXP.user);

        if (!userRegExp.test(userName)) {
            errors.push("Por favor, ingresa un nombre de usuario o correo electrónico válido");
        }
        if (password !== verifyPassword) {
            errors.push("Las contraseñas no coinciden");
        }
        showErrors(errors, errorContainer);
        if (errors.length === 0) {
            try {
                await createUser(userName, password);
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
