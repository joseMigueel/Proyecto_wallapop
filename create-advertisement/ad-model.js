export async function createAds(productName,adsDescription, productImage, productPrice, productType) {
    const token = localStorage.getItem('jwt');

    const reply = await fetch("http://localhost:8000/api/anuncio", {
        method: "POST",
        body: JSON.stringify({
        productName,
        adsDescription,
        productImage,
        productPrice, 
        productType
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!reply.ok){
        throw new Error("Error creando el anuncio")
    }
}