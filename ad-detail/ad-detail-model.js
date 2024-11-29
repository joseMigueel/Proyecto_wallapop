export async function getAds(adId) {
    try {
        const reply = await fetch(`http://localhost:8000/api/anuncio/${adId}?_expand=user`);
        const ad = await reply.json();

        if (!reply.ok){
            throw new Error("Recurso no existente");
        }

        return ad;
    }catch (error){
        throw new Error(error.message)
    }
}
export async function removeAds (adId){
    const token = localStorage.getItem('jwt');

    try {
        const reply = await fetch(`http://localhost:8000/api/anuncio/${adId}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!reply.ok){
            throw new Error("Recurso no existente");
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
