import { headerContentToken, headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
export const getAllWorkspaceService = async () => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}workspaces`, {
        next: { tags: ['workspace'] },
        method: "GET",
        headers: header
    })
    const data = await res.json();
    return data
}

export const getWorkspaceByIdService = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}workspace/${id}`, {
        headers: header
    }, {
        next: { tags: ['workspace'] }
    })
    const data = await res.json();
    return data
}

export const addWorkspaceService = async (body) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}workspaces`, {
        next: { tags: ['workspace'] },
        method: "POST",
        body: JSON.stringify(body),
        headers: header
    })
}

export const deleteWorkspaceService = async (id) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}workspaces/${id}`, {
        next: { tags: ['workspace'] },
        method: "DELETE",
        headers: header
    })
}

export const updateWorkspaceService = async (id, body) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}workspaces/${id}`, {
        next: { tags: ['workspace'] },
        method: "PUT",
        body: JSON.stringify(body),
        headers: header
    })
}

export const addWorkspaceToFavoriteService = async (id, body) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}workspaces/add-to-favorite/${id}`, {
        next: { tags: ['workspace'] },
        method: "PUT",
        body: JSON.stringify(body),
        headers: header
    })
}