import { REGEXP } from "../utilidades/constants.js";
import { createUser } from "./register-model.js";

export function registerController(form) {
    const errorContainer = document.createElement("div");
    errorContainer.id = "error-container";
    errorContainer.style.color = "red";
    form.appendChild(errorContainer);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userNameElement = form.querySelector("#name-user");
        const passwordElement = form.querySelector("#password");
        const verifyPasswordElement = form.querySelector("#verify-password");

        const userName = userNameElement.value.trim();
        const password = passwordElement.value.trim();
        const verifyPassword = verifyPasswordElement.value.trim();

        const errors = [];
        const userRegExp = new RegExp(REGEXP.user);

        // Validar nombre de usuario
        if (!userRegExp.test(userName)) {
            errors.push("Nombre del usuario incorrecto");
        }

        // Validar contraseñas
        if (password !== verifyPassword) {
            errors.push("Las contraseñas no coinciden");
        }

        // Mostrar errores
        showErrors(errors, errorContainer);

        // Si no hay errores, gestionar el registro
        if (errors.length === 0) {
            manageUserRegister(userName, password);
        }
    });
}

function showErrors(errors, errorContainer) {
    // Limpiar errores previos
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

async function manageUserRegister(userName, password) {
    try {
        await createUser(userName, password);
        window.location.href = "/";
    } catch (error) {
        alert(error.message);
    }
}
