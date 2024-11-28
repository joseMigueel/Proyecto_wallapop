import { processController } from "./process/process-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const processContainer = document.querySelector('#process');
    processController(processContainer);
})