export function buildAdDetail(ads) {
    const createAt = new Date(ads.updateAt);

    return `
    <div>
        <span>${createAt.toLocaleDateString()}</span>
        <p>${ads.message}</p>
    </div>
    `
}

export function buildDeleteButton(){
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar anuncio";
    return removeButton;
}