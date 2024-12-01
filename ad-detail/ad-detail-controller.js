import { getCurrentUserInfo } from "../utilidades/auth-model.js";
import { getAds, removeAds } from "./ad-detail-model.js";
import { buildAdDetail, buildDeleteButton, buildViewAllAdsButton } from "./ad-detail-views.js";

export async function adsDetailController(adsDetailContainer, adsId){
    try {
        const ad = await getAds(adsId);
        const user = await getCurrentUserInfo();

        adsDetailContainer.innerHTML = buildAdDetail(ad)
        const viewAlladsButton = buildViewAllAdsButton();
        adsDetailContainer.appendChild(viewAlladsButton)

        viewAlladsButton.addEventListener('click', () => {
            window.location.href = '/'
        })

        if (user.id === ad.user.id){
            const removeButtonElement = buildDeleteButton();
            adsDetailContainer.appendChild(removeButtonElement);
            removeButtonElement.addEventListener("click", async () => {
            const questionRemoveAds = confirm('¿Seguro que quieres borrar el anuncio?');
            if (questionRemoveAds){
                await removeAds(ad.id);
                window.location.href = "/"
            }
            })
        }
    } catch (error) {
        alert(error.message)
        window.location.href = "/"
    }
}