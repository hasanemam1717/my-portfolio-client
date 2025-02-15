/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

const registerUser = async (data: any) => {
    const res = await fetch(`http://localhost:5000/register`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            cache: "no-store"
        })
    const userInfo = await res.json()

    return userInfo

};

export default registerUser;