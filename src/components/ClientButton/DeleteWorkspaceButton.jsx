'use client'
import { handleDeleteWorkspace } from "@/app/actions/workspaceAction"

export const DeleteWorkspaceButton = ({ id }) => <button onClick={() => handleDeleteWorkspace(id)}>Delete</button>