export async function loginUser(user, password) {
    
    const reply = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({
            userName: user,
            password
        }),
        headers: {
            "Content-type": "aplication/json"
        }
    });

    if (!reply.ok) {
        throw new Error("Error iniciando sesión");
    }

    const { accessToken } = await reply.json();
    return accessToken;
}