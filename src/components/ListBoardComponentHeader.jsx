'use client'
import { handleAddFavorite } from "@/app/actions/workspaceAction";
import Image from "next/image";
import React, { useState } from "react";

export default function ListBoardComponentHeader({ className, workspaceName, workspaceFav }) {
  const [fav, setFav] = useState(workspaceName.data.isFavorite);
  const handleStarClick = async () => {
    setFav(!fav);
    await handleAddFavorite(workspaceFav, !workspaceName.data.isFavorite);
    handleAddFavorite()
  }

  //call add to favorite 
  return (
    <div className={`${className}`}>
      <div className={`text-[#94A3B8] flex text-lg gap-3 mb-5`}>
        <p>Workspace</p> / <p>{workspaceName.data.workspaceName}</p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold capitalize">{workspaceName.data.workspaceName ? workspaceName.data.workspaceName : 'no name provide'}</h2>
        <div onClick={() => handleStarClick()} className="border border-gray rounded-lg p-2">
          {fav ? <Image
            src="/assets/icons/star-fill.svg"
            width={20}
            height={20}
            alt="black star"
          /> : <Image
            src="/assets/icons/star.svg"
            width={20}
            height={20}
            alt="black star"
          />}
        </div>
      </div>
    </div>
  );
}
