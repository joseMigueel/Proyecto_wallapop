import { createAdsController } from "./create-advertisement/ad-controller.js";
import { isUserLoggedIn } from "./utilidades/auth.js";


if (!isUserLoggedIn()){
    window.location.href = "/"
}
document.addEventListener("DOMContentLoaded", () => {
    const createAdsForm = document.querySelector('form');

    createAdsController(createAdsForm)
})