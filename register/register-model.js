export async function createUser(user, password) {
    const reply = await fetch("http://localhost:8000/auth/register", {
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
        const errorData = await reply.json().catch(() => ({})); // Manejo de errores del JSON
        const errorMessage = errorData.message || "Error al crear el usuario";
        throw new Error(errorMessage);
    }
}