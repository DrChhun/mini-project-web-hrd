import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkspaceService } from "@/service/workspace.service";
import Link from "next/link";

export default async function SidebarComponent({ className }) {
  const data = await getAllWorkspaceService();
  return (
    <div className={`pl-10 mt-6 h-screen ${className}`}>
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>
      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {data.data.map((x, index) => {
        if (!x.isFavorite) {
          return (
            <div key={index} className="flex items-center mt-5 w-full">
              <div className="rounded-full w-4 h-4 bg-todo"></div>
              <div className="flex justify-between w-full pl-3">
                <Link href={{ pathname: `/todo-list/${x?.workSpaceId}`, query: { sidebar: 'workspace' } }}><p>{x?.workspaceName}</p></Link>

                <EditDeleteDropDownComponent id={x?.workSpaceId} />
              </div>
            </div>
          )
        }
      })}


      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {data.data.map((x, index) => {
        if (x.isFavorite) {
          return (
            <div key={index} className="flex items-center mt-5 w-full">
              <div className="rounded-full w-4 h-4 bg-workingOn"></div>
              <div className="flex justify-between w-full pl-3">
                <Link href={{ pathname: `/todo-list/${x?.workSpaceId}`, query: { sidebar: 'workspace' } }}><p>{x?.workspaceName}</p></Link>
              </div>
            </div>
          )
        }
      })}
    </div>
  );
}
