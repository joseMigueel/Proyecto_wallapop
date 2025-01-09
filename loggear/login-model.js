export async function loginUser(user, password) {
    
    const reply = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({
            username: user,
            password
        }),
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!reply.ok) {
        throw new Error("La contraseña o usuario son incorrectos.");
    }

    const { accessToken } = await reply.json();
    return accessToken;
}