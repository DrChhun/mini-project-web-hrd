import React from "react";
export default function MonthlyStatisticsComponent({ className, workspaceData }) {
  let todo = 0;
  let completed = 0;
  let working = 0;
  let checking = 0;
  for (const task of workspaceData.data) {
    if (task.status === 1) {
      todo++;
    } else if (task.status === 2) {
      working++;
    } else if (task.status === 3) {
      checking++;
    } else if (task.status === 4) {
      completed++;
    } else {
      return;
    }
  }
  return (
    <div className={`${className}`}>
      <h1 className="text-xl font-bold mb-5 mt-12 text-center">Statistics on July</h1>
      <div className="flex flex-col space-y-2">
        <div className={`${completed != 0 ? 'flex' : 'hidden'} gap-3 items-center`}>
          <div className="bg-completed h-5 rounded-lg w-2"></div>
          <p>
            Completed : <span>{completed}</span> tasks
          </p>
        </div>
        <div className={`${checking != 0 ? 'flex' : 'hidden'} gap-3 items-center`}>
          <div className="bg-[#FFB57F] h-5 rounded-lg w-2"></div>
          <p>
            Checking : <span>{checking}</span> tasks
          </p>
        </div>
        <div className={`${working != 0 ? 'flex' : 'hidden'} gap-3 items-center`}>
          <div className="bg-[#306BFF] h-5 rounded-lg w-2"></div>
          <p>
            Working on : <span>{working}</span> tasks
          </p>
        </div>
        <div className={`${todo != 0 ? 'flex' : 'hidden'} gap-3 items-center`}>
          <div className="bg-[#FFEE93] h-5 rounded-lg w-2"></div>
          <p>
            Todo : <span>{todo}</span> tasks
          </p>
        </div>
      </div>
    </div>
  );
}
