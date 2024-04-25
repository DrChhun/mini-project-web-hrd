import { redirect } from "next/navigation";
export const loginService = async (userData) => {
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/login`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json();
    return data;
}

export const registerService = async (userLogin) => {
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/sign-up`, {
        method: 'POST',
        body: JSON.stringify(userLogin),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    data.status === 200 && redirect('/login')
}