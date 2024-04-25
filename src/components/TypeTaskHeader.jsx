export const TypeTaskHeader = ({ name }) => {
    const handleColor = name.toLowerCase();
    
    return (
        <div className="space-y-2">
            <p className="uppercase text-2xl font-semibold">{name}</p>
            <div className={`h-[2.55px] w-full ${handleColor == 'todo' ? 'bg-[#FFEE93]' : handleColor == 'working' ? 'bg-[#306BFF]' : handleColor == 'checking' ? 'bg-[#FFB57F]' : 'bg-[#78C552]'}`}></div>
        </div>
    )
}