export async function createUser(user, password){
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
        throw new Error("Este usuario ya existe.")
    }
}