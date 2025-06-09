import { UserCircleIcon } from "@heroicons/react/24/outline"

export default function Team(props) {
    
    
    return (
        <div className="rounded-2xl shadow-lg flex flex-col items-center border-2 w-70 md:w-80 border-stone-300 relative animate-[appear_2s_ease-in-out]">
            <UserCircleIcon className="size-60 stroke-white stroke-1" />
            <div className="absolute bottom-0 rounded-b-2xl text-black font-bold bg-gray-300 w-70 md:w-80">
                <p>{props.Name}</p>
                <p>{props.Department}{props.Year} Year</p>
            </div>
        </div>

    );
}