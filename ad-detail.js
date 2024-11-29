import { adsDetailController } from "./ad-detail/ad-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchParam = new URLSearchParams(window.location.search);
    const adId = searchParam.get("id");

    const adsDetailContainer = document.querySelector("#ads-detail")

    adsDetailController(adsDetailContainer, adId)
})