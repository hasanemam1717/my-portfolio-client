export async function getCurrentUser() {
    // Replace with your authentication logic
    const res = await fetch("http://localhost:5000/login", { method: "POST" })
    const user = await res.json()
    // Example: Fetch user from session or token
    return user; // Return user object or null if not authenticated
}