export async function getAds() {
    try {
        const reply = await fetch("http://localhost:8000/api/anuncio?_expand=user");
        const ads = await reply.json();

        if (!reply.ok){
            throw new Error("Recurso no existente");

        }
        return ads;
        
    } catch (error) {
        throw new Error(error.message)
    }
}