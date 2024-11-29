import { processController } from "./process/process-controller.js";
import { adsController } from "./advertisement/ad-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const processContainer = document.querySelector('#process');
    const adsContainer = document.querySelector("#ads-container");

    processController(processContainer);
    adsController(adsContainer)
})