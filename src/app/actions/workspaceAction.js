'use server'
import { registerService } from "@/service/auth.service";
import { addWorkspaceService, addWorkspaceToFavoriteService, deleteWorkspaceService, updateWorkspaceService } from "@/service/workspace.service"
import { revalidateTag } from "next/cache";

export const handleWorkspace = async (workingData) => {
    const newData = {
        workspaceName: workingData.get('workspaceName')
    }
    await addWorkspaceService(newData);
    revalidateTag('workspace')
}

export const handleDeleteWorkspace = async (id) => {
    await deleteWorkspaceService(id);
    revalidateTag('workspace')
}

export const handleUpdateWorkspace = async (id) => {
    const newData = {
        workspaceName: "GG-Update"
    }
    await updateWorkspaceService(id, newData);
    revalidateTag('workspace')
}

export const handleRegister = async (detail) => {
    const firstName = detail.get('fname')
    const lastName = detail.get('lname');
    const gender = "Why"
    const profileUrl = "abc.png"
    const email = detail.get('email');
    const password = detail.get('password');
    const loginDetail = {
        firstname: firstName,
        lastname: lastName,
        gender: gender,
        profile_url: profileUrl,
        email: email,
        password: password,
    }
    await registerService(loginDetail)
}

export const handleAddFavorite = async (id, favorite) => {
    await addWorkspaceToFavoriteService(id, favorite);
    revalidateTag('workspace')
}