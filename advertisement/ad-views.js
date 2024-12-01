export const buildAd = (ads) => {
    const newAds = document.createElement('a');
    newAds.setAttribute("href", `/ad-detail.html?id=${ads.id}`);
    
    const createAd = new Date(ads.updatedAt)
    newAds.innerHTML = `
    <div class="ad-card">
        <span>usuario: ${ads.user.username}</span> <br>
        <span>${createAd.toLocaleDateString()}</span>
        <p><strong>Product Name: </strong>${ads.productName}</p>
        <p><strong>Description: </strong>${ads.adsDescription}</p>
        <p><strong>Image: </strong>${ads.productImage}</p>
        <p><strong>Price: </strong>${ads.productPrice}</p>
        <p><strong>Type: </strong>${ads.productType}</p>
    </div>
    `;
    return newAds;
}

export function builEmptyAdList(){
    return '<h2 class="empty-List">No hay anuncios disponibles</h2>';
}