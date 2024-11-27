import { processController } from "./process/process-controller";

document.addEventListener("DOMContentLoaded", () => {
    const processContainer = document.querySelector('#process');
    processController(processContainer);
})