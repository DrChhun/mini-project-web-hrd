import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodoCardComponent from "@/components/TodoCardComponent";
import { TypeTaskHeader } from "@/components/TypeTaskHeader";
import { getALlTaskByWorkspace } from "@/service/tasks.service";
import { getWorkspaceByIdService } from "@/service/workspace.service";

const Page = async ({ params: { slug } }) => {
    const pageId = slug;
    const data = await getALlTaskByWorkspace(slug);
    const worksapceData = await getWorkspaceByIdService(slug);
    return (
        <div>
            <ListBoardComponentHeader workspaceName={worksapceData} />
            <div className="mt-10 grid grid-cols-4 gap-3">
                <div className="h-full">
                    <TypeTaskHeader name={`TODO`} />
                    {data?.data.map((x, index) => {
                        if (x.status == 1) {
                            return (
                                <TodoCardComponent key={index} taskId={x?.taskId} pageId={slug} status={x?.status} />
                            )
                        }
                    })}
                </div>
                <div className="w-full">
                    <TypeTaskHeader name={`working`} />
                    {data?.data.map((x, index) => {
                        if (x.status == 2) {
                            return (
                                <TodoCardComponent key={index} taskId={x?.taskId} pageId={slug} status={x?.status} />
                            )
                        }
                    })}
                </div>
                <div>
                    <TypeTaskHeader name={`checking`} />
                    {data?.data.map((x, index) => {
                        if (x.status == 3) {
                            return (
                                <TodoCardComponent key={index} taskId={x?.taskId} pageId={slug} status={x?.status} />
                            )
                        }
                    })}
                </div>
                <div>
                    <TypeTaskHeader name={`completed`} />
                    {data?.data.map((x, index) => {
                        if (x.status == 4) {
                            return (
                                <TodoCardComponent key={index} taskId={x?.taskId} pageId={slug} status={x?.status} />
                            )
                        }
                    })}
                </div>
            </div>
            <AddNewTaskComponent id={pageId} className={'!absolute bottom-6 right-6'} />
        </div>
    )
};

export default Page