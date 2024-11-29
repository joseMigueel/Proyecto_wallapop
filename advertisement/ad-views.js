export const buildAd = (ads) => {
    const newAds = document.createElement('a');
    newAds.setAttribute("href", `/ad-detail.html?id=${ads.id}`);
    const createAd = new Date(ads.updateAt)
    newAds.innerHTML = `
    <div>
        <span>usuario: ${ads.user.username} - ${createAd.toLocaleDateString()}</span>
        <p>${ads.message}</p>
    </div>
    `;
    return newAds;
}

export function builEmptyAdList(){
    return '<h2>No hay anuncios disponibles</h2>';
}