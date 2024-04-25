import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import { ListCard } from "@/components/ListCard";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import { getALlTaskByWorkspace } from "@/service/tasks.service"
import { getWorkspaceByIdService } from "@/service/workspace.service";

const Page = async ({ params: { slug } }) => {
    const pageId = slug;
    const data = await getALlTaskByWorkspace(slug);
    const worksapceData = await getWorkspaceByIdService(slug);
    return (
        <>
            <div className="w-full flex gap-6">
                <div className={`!w-3/4`}>
                    <ListBoardComponentHeader workspaceFav={slug} workspaceName={worksapceData} />
                    <div className="space-y-4 mt-8">
                        {data?.data?.map((x, index) => {
                            const dateTimeString = x?.dueDate;
                            const dateTime = new Date(dateTimeString);
                            const day = dateTime.getDate();
                            return (
                                <ListCard key={index} date={x?.dueDate} day={day} title={x?.taskTitle} description={x?.description} status={x?.status} />
                            )
                        })}
                    </div>
                </div>
                <div className={'!w-1/4'} >
                    <MonthlyStatisticsComponent workspaceData={data} />
                </div>
                <AddNewTaskComponent id={pageId} className={'!absolute bottom-6 right-6'} />
            </div>
        </>
    )
}

export default Page