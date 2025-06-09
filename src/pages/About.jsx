import Team from "../components/Team"
import ChatBot from "../components/chatbot"

export default function About() {

    const team = [
        {
            index: 1,
            Name: "Siddarth",
            Department: "CSE(AI&ML)",
            Year: "3rd",
            img: ""
        },
        {
            index: 2,
            Name: "Suhaas",
            Department: "CSE(AI&ML)",
            Year: "3rd",
            img: ""
        },
        {
            index: 3,
            Name: "Rishi",
            Department: "CSE(AI&ML)",
            Year: "3rd",
            img: ""
        },
        {
            index: 4,
            Name: "Santhosh",
            Department: "CSE(AI&ML)",
            Year: "3rd",
            img: ""
        },
    ]
    return (
        <>
            <title>About Us</title>
            <div className="">
                <div className="text-center place-items-center my-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12">
                        {
                            team.map((item) =>
                                <Team key={item.index} Name={item.Name} Department={item.Department} Year={item.Year} />
                            )
                        }
                    </div>
                </div>
            </div>
            <ChatBot />

        </>
    )
};