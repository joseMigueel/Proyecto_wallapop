export function buildAdDetail(ads) {
    const createAt = new Date(ads.updatedAt);

    return `
    <div>
        <span>${createAt.toLocaleDateString()}</span>
        <p>${ads.productName}</p>
        <p>${ads.adsDescription}</p>
        <p>${ads.productImage}</p>
        <p>${ads.productPrice}</p>
        <p>${ads.productType}</p>
    </div>
    `
}

export function buildDeleteButton(){
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar anuncio";
    return removeButton;
}