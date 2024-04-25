'use server'
import { addNewTaskService, changeTaskStatusService, deleteTaskService } from "@/service/tasks.service";
import { revalidateTag } from "next/cache";
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

export const addNewTaskAction = async (taskData) => {
    const newTask = {
        taskTitle: taskData.get('title'),
        description: taskData.get('description'),
        startDate: formattedDate + `T08:02:08.651Z`,
        dueDate: taskData.get(`dueDate`) + `T08:02:08.651Z`,
        tag: taskData.get('tag'),
        status: 1,
        workspaceId: taskData.get('id')
    }
    await addNewTaskService(172, newTask);
    revalidateTag('workspace')
}

export const changeTaskStatusAction = async (id, status) => {
    const newStatus = status >= 4
        ? { status: status }
        : { status: status + 1 };
    await changeTaskStatusService(id, newStatus);
    revalidateTag('workspace')
}

export const handleDeleteTaskAction = async (workId, taskId) => {
    await deleteTaskService(workId, taskId);
    revalidateTag('workspace')
}