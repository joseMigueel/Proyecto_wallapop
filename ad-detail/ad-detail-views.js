export function buildAdDetail(ads) {
    const createAt = new Date(ads.updatedAt);

    return `
    <div class="ad-detail">
        <span>${createAt.toLocaleDateString()}</span>
        <p><strong>Product Name: </strong>${ads.productName}</p>
        <p><strong>Description: </strong>${ads.adsDescription}</p>
        <p><strong>Image: </strong>${ads.productImage}</p>
        <p><strong>Price: </strong>${ads.productPrice}</p>
        <p><strong>Type: </strong>${ads.productType}</p>
    </div>
    `
}

export function buildDeleteButton(){
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar anuncio";
    removeButton.classList.add('ad-detail-button');
    return removeButton;
}

export function buildViewAllAdsButton() {
    const viewAlladsButton = document.createElement('button');
    viewAlladsButton.textContent = "Ver mas anuncios";
    viewAlladsButton.classList.add('ad-view-button')
    return viewAlladsButton;
}