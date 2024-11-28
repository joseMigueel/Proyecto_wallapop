export async function createAds(message) {
    const token = localStorage.getItem('jwt');

    const reply = await fetch("http://localhost:8000/api/anuncio", {
        method: "POST",
        body: JSON.stringify({
            ...message
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