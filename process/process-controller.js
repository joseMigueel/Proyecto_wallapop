import { isUserLoggedIn } from "../utilidades/auth.js";
import { userAuthorizationProcess } from "./process-view.js";

export function processController(processContainer) {
    if (isUserLoggedIn()){
        processContainer.innerHTML = userAuthorizationProcess();
        const closeProcessButton = processContainer.querySelector("button")
        closeProcessButton.addEventListener("click", ()=> {
            localStorage.removeItem("jwt")
            processController(processContainer)
        })
    } else {
        processContainer.innerHTML = userAuthorizationProcess()
    }
}