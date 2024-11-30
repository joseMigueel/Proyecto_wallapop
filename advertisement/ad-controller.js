import { getAds } from "./ad-model.js";
import { buildAd, builEmptyAdList } from "./ad-views.js";

function drawAds (ads, adsContainer){
    if(!ads.length) {
        adsContainer.innerHTML = builEmptyAdList();
    } else {
        ads.forEach(ad => {
            const newAds = buildAd(ad);
            adsContainer.appendChild(newAds);
        })
    }
}

function fireEvent(message, type, element){
    const customEvent = new CustomEvent("loading-ads", {
        detail: {
            message,
            type,
        }
    });
    element.dispatchEvent(customEvent);
}

export async function adsController(adsContainer){
    const spinner = document.querySelector('.spinner')
    adsContainer.innerHTML = "";

    spinner.classList.toggle('hidden');
    try {
        const ads = await getAds();
        fireEvent("Anuncio cargado correctamente", "success", adsContainer);
        drawAds(ads, adsContainer)
    }catch (error){
        fireEvent(error.message, "error", adsContainer);
    }finally {
        spinner.classList.toggle('hidden')
    }
}