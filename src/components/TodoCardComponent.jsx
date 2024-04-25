'use client'
import Image from "next/image";
import React from "react";
import { changeTaskStatusAction } from "@/app/actions/taskAction";
import { DeleteOnlyComponent } from "./DeleteOnlyComponent";

export default function TodoCardComponent({ taskId, status, pageId }) {
  const handleClick = async () => {
    await changeTaskStatusAction(taskId, status);
  }
  return (
    <div className={`border border-gray rounded-lg mt-5 relative`}>
      <div className="p-5">
        <div className="flex justify-between">
          <p>Slack Integration</p>
          <div className="absolute top-2 right-3">
            <DeleteOnlyComponent workId={pageId} todoId={taskId} />
          </div>
        </div>

        <p className="text-gray">Description</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            Development
          </div>
          <div className={`rounded-full w-5 h-5 ${status == 1 ? `bg-todo` : status == 2 ? `bg-workingOn` : status == 3 ? `bg-checking` : status == 4 ? `bg-completed` : `bg-black`}`}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 px-2 justify-between pr-3 py-2 hover:cursor-pointer">
        <Image
          onClick={() => handleClick()}
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <div className="flex space-x-2">
          <Image
            src={"/assets/icons/calendar.svg"}
            width={20}
            height={20}
            alt="calendar icon"
          />
          <p className="text-gray">March 1, 2024</p>
        </div>
      </div>
    </div >
  );
}
