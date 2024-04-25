'use client'
import { handleDeleteTaskAction } from "@/app/actions/taskAction"
import Image from "next/image"

export const DeleteOnlyComponent = ({ workId, todoId }) => {
    const handleClick = async () => {
        await handleDeleteTaskAction(workId, todoId);
    }
    return (
        <>
            <label htmlFor="my_modal_7" className="btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
                <Image
                    src={"/assets/icons/tabler_dots.svg"}
                    width={20}
                    height={20}
                    alt={"edit delete card"}
                />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box space-y-4">
                    <h3 className="text-lg font-bold">Are you sure you want to delete?</h3>
                    <button onClick={() => handleClick()} className="btn btn-error text-white">Delete</button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}