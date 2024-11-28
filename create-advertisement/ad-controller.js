

export function createAdsController(createAdsForm){
    createAdsForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const productNameElement = createAdsForm.querySelector("#product-name");
        const adsDescriptionElement = createAdsForm.querySelector("#ads-content");
        const productImageElement = createAdsForm.querySelector("#ads-image");
        const productPriceElement = createAdsForm.querySelector("#ads-price");
        const productTypeElement = createAdsForm.querySelector("#ads-type");

        const productName = productNameElement.value;
        const adsDescription = adsDescriptionElement.value;
        const productImage = productImageElement.value;
        const productPrice = productPriceElement.value;
        const productType = productTypeElement.value;

        manageAdsCreation(productName,adsDescription, productImage, productPrice, productType )
    })

    async function manageAdsCreation(productName,adsDescription, productImage, productPrice, productType) {
        try {
            await createAds(productName,adsDescription, productImage, productPrice, productType)
            window.location.href = "/"
        } catch (error) {
            alert(error.message)
        }
    }
}