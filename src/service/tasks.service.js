import { headerContentToken, headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
export const getALlTaskByWorkspace = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}tasks?workspaceId=${id}`, {
        next: { tags: ['workspace'] },
        method: "GET",
        headers: header
    })
    const data = await res.json();
    return data
}

export const addNewTaskService = async (id, newTask) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}tasks?workspaceId=${id}`, {
        next: { tags: ['workspace'] },
        method: "POST",
        body: JSON.stringify(newTask),
        headers: header
    })
    const data = await res.json();
    return data
}

export const changeTaskStatusService = async (id, newStatus) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}tasks/change-status/${id}`, {
        next: { tags: ['workspace'] },
        method: "PUT",
        body: JSON.stringify(newStatus),
        headers: header
    })
    const data = await res.json();
    return data
}

export const deleteTaskService = async (workId, taskId) => {
    const header = await headerContentToken();
    const res = await fetch(`${baseUrl}tasks/deleteTaskByWorkspaceIdAndTaskId/${workId}/ ${taskId}`, {
        next: { tags: ['workspace'] },
        method: "DELETE",
        headers: header
    })
    const data = await res.json();
    return data
}