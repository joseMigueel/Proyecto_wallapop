export async function getCurrentUserInfo(){
    const token = localStorage.getItem('jwt');
    try{
        const reply = await fetch(`http://localhost:8000/auth/me`,{
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const user = await reply.json();
        if (!reply.ok) {
            throw new Error("Usuario no existente");
        }
        return user;
    } catch (error) {
        throw new Error(error.message)
    }

}