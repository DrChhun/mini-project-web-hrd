'use client'
import { handleUpdateWorkspace } from "@/app/actions/workspaceAction"

export const UpdateWorkspaceButton = ({ id }) => {
    return (
        <>
            <button onClick={() => handleUpdateWorkspace(id)}>Update</button>

        </>
    )
}