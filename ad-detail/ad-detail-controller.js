import { getCurrentUserInfo } from "../utilidades/auth-model";


export async function adsDetailController(adsDetailContainer, adsId){
    try {
        const ad = await getAds(adsId);
        const user = await getCurrentUserInfo();

        adsDetailContainer.innerHTML = buildAdDetail(ad)

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