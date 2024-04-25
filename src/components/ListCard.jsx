export const ListCard = ({ day, title, description, status, date }) => {
    const getDayOfWeek = () => {
        const date = new Date(dateFromAPI);
        const dayOfWeek = date.getDay();
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const day = dayNames[dayOfWeek];
        return day
    }
    const dateFromAPI = date;
    const dayLetter = getDayOfWeek(dateFromAPI);
    return (
        <div className={`flex rounded-lg p-4 justify-between items-end ${status == 1 ? `bg-todo` : status == 2 ? `bg-workingOn` : status == 3 ? `bg-checking` : `bg-completed`}`}>
            <div className="flex gap-9">
                <div className="rounded-md bg-white py-5 px-10">
                    <p className="text-red-600 text-base uppercase text-center">{dayLetter}</p>
                    <h2 className="text-[#222222] text-[40px]">{day}</h2>
                </div>
                <div className={`flex justify-center flex-col ${status == 1 ? `text-[#222222]` : `text-white`} w-[275.72px]`}>
                    <h2 className="text-xl">{title}</h2>
                    <p className="text-base">
                        {description}
                    </p>
                </div>
            </div>
            <button className="w-40 h-11 uppercase py-3 bg-[#F0FAFF] text-[#004F74] rounded-md">
                {status == 1 ? 'todo' : status == 2 ? 'working on' : status == 3 ? 'checking' : status == 4 ? 'completed' : 'wrong type'}
            </button>
        </div>
    )
}